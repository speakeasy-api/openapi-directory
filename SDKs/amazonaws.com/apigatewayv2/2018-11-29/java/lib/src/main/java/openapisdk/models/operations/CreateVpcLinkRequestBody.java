package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVpcLinkRequestBody {
    @JsonProperty("name")
    public String name;
    public CreateVpcLinkRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("securityGroupIds")
    public String[] securityGroupIds;
    public CreateVpcLinkRequestBody withSecurityGroupIds(String[] securityGroupIds) {
        this.securityGroupIds = securityGroupIds;
        return this;
    }
    @JsonProperty("subnetIds")
    public String[] subnetIds;
    public CreateVpcLinkRequestBody withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateVpcLinkRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}