package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NetworkRelationshipsSeries
 * List of series within the network which are accessible to you
**/
public class NetworkRelationshipsSeries {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ResourceIdentifier[] data;
    public NetworkRelationshipsSeries withData(ResourceIdentifier[] data) {
        this.data = data;
        return this;
    }
}