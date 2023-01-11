package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DimensionKeyAnnotation
 * This type defines the annotation values associated with a dimension. Annotations are metadata of the dimension. For example, annotations for a listing ID could be listing_title or listing_quantity_sold.
**/
public class DimensionKeyAnnotation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("annotationKey")
    public String annotationKey;
    public DimensionKeyAnnotation withAnnotationKey(String annotationKey) {
        this.annotationKey = annotationKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataType")
    public String dataType;
    public DimensionKeyAnnotation withDataType(String dataType) {
        this.dataType = dataType;
        return this;
    }
}