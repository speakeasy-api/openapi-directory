package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ValueWithServiceIds
 * Information about a segment annotation.
**/
public class ValueWithServiceIds {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnnotationValue")
    public AnnotationValue annotationValue;
    public ValueWithServiceIds withAnnotationValue(AnnotationValue annotationValue) {
        this.annotationValue = annotationValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceIds")
    public ServiceId[] serviceIds;
    public ValueWithServiceIds withServiceIds(ServiceId[] serviceIds) {
        this.serviceIds = serviceIds;
        return this;
    }
}