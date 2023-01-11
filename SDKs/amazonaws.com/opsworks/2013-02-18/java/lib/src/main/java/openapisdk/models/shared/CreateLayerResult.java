package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLayerResult
 * Contains the response to a <code>CreateLayer</code> request.
**/
public class CreateLayerResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LayerId")
    public String layerId;
    public CreateLayerResult withLayerId(String layerId) {
        this.layerId = layerId;
        return this;
    }
}