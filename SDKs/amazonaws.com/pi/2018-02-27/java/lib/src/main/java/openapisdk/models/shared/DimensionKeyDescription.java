package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionKeyDescription
 * An array of descriptions and aggregated values for each dimension within a dimension group.
**/
public class DimensionKeyDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Dimensions")
    public java.util.Map<String, String> dimensions;
    public DimensionKeyDescription withDimensions(java.util.Map<String, String> dimensions) {
        this.dimensions = dimensions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Partitions")
    public Double[] partitions;
    public DimensionKeyDescription withPartitions(Double[] partitions) {
        this.partitions = partitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Total")
    public Double total;
    public DimensionKeyDescription withTotal(Double total) {
        this.total = total;
        return this;
    }
}