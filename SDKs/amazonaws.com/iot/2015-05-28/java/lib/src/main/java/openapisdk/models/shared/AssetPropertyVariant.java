package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetPropertyVariant
 * Contains an asset property value (of a single type).
**/
public class AssetPropertyVariant {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("booleanValue")
    public String booleanValue;
    public AssetPropertyVariant withBooleanValue(String booleanValue) {
        this.booleanValue = booleanValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doubleValue")
    public String doubleValue;
    public AssetPropertyVariant withDoubleValue(String doubleValue) {
        this.doubleValue = doubleValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("integerValue")
    public String integerValue;
    public AssetPropertyVariant withIntegerValue(String integerValue) {
        this.integerValue = integerValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stringValue")
    public String stringValue;
    public AssetPropertyVariant withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}