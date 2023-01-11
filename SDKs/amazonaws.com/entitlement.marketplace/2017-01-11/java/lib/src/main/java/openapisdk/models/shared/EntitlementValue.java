package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntitlementValue
 * The EntitlementValue represents the amount of capacity that the customer is entitled to for the product.
**/
public class EntitlementValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BooleanValue")
    public Boolean booleanValue;
    public EntitlementValue withBooleanValue(Boolean booleanValue) {
        this.booleanValue = booleanValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DoubleValue")
    public Double doubleValue;
    public EntitlementValue withDoubleValue(Double doubleValue) {
        this.doubleValue = doubleValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IntegerValue")
    public Long integerValue;
    public EntitlementValue withIntegerValue(Long integerValue) {
        this.integerValue = integerValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StringValue")
    public String stringValue;
    public EntitlementValue withStringValue(String stringValue) {
        this.stringValue = stringValue;
        return this;
    }
}