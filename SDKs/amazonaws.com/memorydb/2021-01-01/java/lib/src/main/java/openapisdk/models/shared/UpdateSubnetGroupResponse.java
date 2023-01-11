package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateSubnetGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetGroup")
    public SubnetGroup subnetGroup;
    public UpdateSubnetGroupResponse withSubnetGroup(SubnetGroup subnetGroup) {
        this.subnetGroup = subnetGroup;
        return this;
    }
}