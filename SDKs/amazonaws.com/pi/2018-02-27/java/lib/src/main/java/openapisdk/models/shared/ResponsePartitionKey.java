package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ResponsePartitionKey
 * If <code>PartitionBy</code> was specified in a <code>DescribeDimensionKeys</code> request, the dimensions are returned in an array. Each element in the array specifies one dimension. 
**/
public class ResponsePartitionKey {
    @JsonProperty("Dimensions")
    public java.util.Map<String, String> dimensions;
    public ResponsePartitionKey withDimensions(java.util.Map<String, String> dimensions) {
        this.dimensions = dimensions;
        return this;
    }
}