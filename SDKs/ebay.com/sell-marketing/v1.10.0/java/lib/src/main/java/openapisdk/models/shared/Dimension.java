package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Dimension
 * This type defines the annotation and dimension key used by the report. For information on how to set these values, see Reading Promoted Listings reports.
**/
public class Dimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationKeys")
    public String[] annotationKeys;
    public Dimension withAnnotationKeys(String[] annotationKeys) {
        this.annotationKeys = annotationKeys;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dimensionKey")
    public String dimensionKey;
    public Dimension withDimensionKey(String dimensionKey) {
        this.dimensionKey = dimensionKey;
        return this;
    }
}