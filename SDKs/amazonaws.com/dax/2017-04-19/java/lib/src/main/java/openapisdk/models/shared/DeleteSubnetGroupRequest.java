package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteSubnetGroupRequest {
    @JsonProperty("SubnetGroupName")
    public String subnetGroupName;
    public DeleteSubnetGroupRequest withSubnetGroupName(String subnetGroupName) {
        this.subnetGroupName = subnetGroupName;
        return this;
    }
}