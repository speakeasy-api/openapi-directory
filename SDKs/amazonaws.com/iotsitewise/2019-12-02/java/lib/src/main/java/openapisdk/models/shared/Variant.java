package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Variant
 * Contains an asset property value (of a single type only).
**/
public class Variant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("booleanValue")
    public Boolean booleanValue;
    public Variant withBooleanValue(Boolean booleanValue) {
        this.booleanValue = booleanValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doubleValue")
    public Double doubleValue;
    public Variant withDoubleValue(Double doubleValue) {
        this.doubleValue = doubleValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integerValue")
    public Long integerValue;
    public Variant withIntegerValue(Long integerValue) {
        this.integerValue = integerValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public Variant withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}