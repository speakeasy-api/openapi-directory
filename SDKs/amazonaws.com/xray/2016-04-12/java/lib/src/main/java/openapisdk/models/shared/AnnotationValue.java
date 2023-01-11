package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AnnotationValue
 * Value of a segment annotation. Has one of three value types: Number, Boolean, or String.
**/
public class AnnotationValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BooleanValue")
    public Boolean booleanValue;
    public AnnotationValue withBooleanValue(Boolean booleanValue) {
        this.booleanValue = booleanValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumberValue")
    public Double numberValue;
    public AnnotationValue withNumberValue(Double numberValue) {
        this.numberValue = numberValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StringValue")
    public String stringValue;
    public AnnotationValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}