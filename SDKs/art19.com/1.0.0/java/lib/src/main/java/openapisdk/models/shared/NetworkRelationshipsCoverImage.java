package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkRelationshipsCoverImage
 * The cover image for the network
**/
public class NetworkRelationshipsCoverImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier data;
    public NetworkRelationshipsCoverImage withData(ResourceIdentifier data) {
        this.data = data;
        return this;
    }
}