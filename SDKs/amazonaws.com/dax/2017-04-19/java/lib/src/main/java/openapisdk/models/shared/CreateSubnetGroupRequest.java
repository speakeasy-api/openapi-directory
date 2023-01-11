package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSubnetGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateSubnetGroupRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("SubnetGroupName")
    public String subnetGroupName;
    public CreateSubnetGroupRequest withSubnetGroupName(String subnetGroupName) {
        this.subnetGroupName = subnetGroupName;
        return this;
    }
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public CreateSubnetGroupRequest withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
}