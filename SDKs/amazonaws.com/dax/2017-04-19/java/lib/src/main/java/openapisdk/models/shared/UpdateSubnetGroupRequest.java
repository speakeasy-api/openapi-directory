package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSubnetGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateSubnetGroupRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("SubnetGroupName")
    public String subnetGroupName;
    public UpdateSubnetGroupRequest withSubnetGroupName(String subnetGroupName) {
        this.subnetGroupName = subnetGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetIds")
    public String[] subnetIds;
    public UpdateSubnetGroupRequest withSubnetIds(String[] subnetIds) {
        this.subnetIds = subnetIds;
        return this;
    }
}