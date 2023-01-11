package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkRelationshipsParent
 * The parent network of the network
**/
public class NetworkRelationshipsParent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier data;
    public NetworkRelationshipsParent withData(ResourceIdentifier data) {
        this.data = data;
        return this;
    }
}