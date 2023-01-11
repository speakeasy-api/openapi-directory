package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetSignalingChannelEndpointOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceEndpointList")
    public ResourceEndpointListItem[] resourceEndpointList;
    public GetSignalingChannelEndpointOutput withResourceEndpointList(ResourceEndpointListItem[] resourceEndpointList) {
        this.resourceEndpointList = resourceEndpointList;
        return this;
    }
}