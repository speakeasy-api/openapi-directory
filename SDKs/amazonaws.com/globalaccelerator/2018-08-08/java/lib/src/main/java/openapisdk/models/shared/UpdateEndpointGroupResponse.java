package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateEndpointGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointGroup")
    public EndpointGroup endpointGroup;
    public UpdateEndpointGroupResponse withEndpointGroup(EndpointGroup endpointGroup) {
        this.endpointGroup = endpointGroup;
        return this;
    }
}