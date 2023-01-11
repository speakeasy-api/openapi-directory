package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEndpointGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointGroup")
    public EndpointGroup endpointGroup;
    public CreateEndpointGroupResponse withEndpointGroup(EndpointGroup endpointGroup) {
        this.endpointGroup = endpointGroup;
        return this;
    }
}