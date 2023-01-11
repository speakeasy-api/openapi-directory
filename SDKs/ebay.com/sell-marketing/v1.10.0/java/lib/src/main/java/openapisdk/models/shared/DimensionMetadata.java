package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionMetadata
 * This type defines the dimension used to create the report and the annotation keys associated with that dimension.
**/
public class DimensionMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public String dataType;
    public DimensionMetadata withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionKey")
    public String dimensionKey;
    public DimensionMetadata withDimensionKey(String dimensionKey) {
        this.dimensionKey = dimensionKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionKeyAnnotations")
    public DimensionKeyAnnotation[] dimensionKeyAnnotations;
    public DimensionMetadata withDimensionKeyAnnotations(DimensionKeyAnnotation[] dimensionKeyAnnotations) {
        this.dimensionKeyAnnotations = dimensionKeyAnnotations;
        return this;
    }
}