package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeLayersResult
 * Contains the response to a <code>DescribeLayers</code> request.
**/
public class DescribeLayersResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Layers")
    public Layer[] layers;
    public DescribeLayersResult withLayers(Layer[] layers) {
        this.layers = layers;
        return this;
    }
}