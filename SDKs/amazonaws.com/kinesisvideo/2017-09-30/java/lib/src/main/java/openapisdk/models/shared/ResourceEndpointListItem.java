package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourceEndpointListItem
 * An object that describes the endpoint of the signaling channel returned by the <code>GetSignalingChannelEndpoint</code> API.
**/
public class ResourceEndpointListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Protocol")
    public ChannelProtocolEnum protocol;
    public ResourceEndpointListItem withProtocol(ChannelProtocolEnum protocol) {
        this.protocol = protocol;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceEndpoint")
    public String resourceEndpoint;
    public ResourceEndpointListItem withResourceEndpoint(String resourceEndpoint) {
        this.resourceEndpoint = resourceEndpoint;
        return this;
    }
}