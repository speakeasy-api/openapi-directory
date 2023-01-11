package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSubnetGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubnetGroup")
    public SubnetGroup subnetGroup;
    public CreateSubnetGroupResponse withSubnetGroup(SubnetGroup subnetGroup) {
        this.subnetGroup = subnetGroup;
        return this;
    }
}