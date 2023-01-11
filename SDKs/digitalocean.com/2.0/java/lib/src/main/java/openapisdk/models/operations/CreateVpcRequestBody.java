package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateVpcRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateVpcRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ip_range")
    public String ipRange;
    public CreateVpcRequestBody withIpRange(String ipRange) {
        this.ipRange = ipRange;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateVpcRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("region")
    public String region;
    public CreateVpcRequestBody withRegion(String region) {
        this.region = region;
        return this;
    }
}