package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Field
 * A data value in a column. 
**/
public class Field {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("blobValue")
    public String blobValue;
    public Field withBlobValue(String blobValue) {
        this.blobValue = blobValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("booleanValue")
    public Boolean booleanValue;
    public Field withBooleanValue(Boolean booleanValue) {
        this.booleanValue = booleanValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doubleValue")
    public Double doubleValue;
    public Field withDoubleValue(Double doubleValue) {
        this.doubleValue = doubleValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isNull")
    public Boolean isNull;
    public Field withIsNull(Boolean isNull) {
        this.isNull = isNull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("longValue")
    public Long longValue;
    public Field withLongValue(Long longValue) {
        this.longValue = longValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public Field withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}