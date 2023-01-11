package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkRelationshipsImages
 * A collection of images linked to the network. This currently only includes
 * the cover image for the network.
 * 
**/
public class NetworkRelationshipsImages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier[] data;
    public NetworkRelationshipsImages withData(ResourceIdentifier[] data) {
        this.data = data;
        return this;
    }
}