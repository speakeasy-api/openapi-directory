package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntitlementUsage
 * Usage associated with an entitlement resource.
**/
public class EntitlementUsage {
    @JsonProperty("ConsumedValue")
    public String consumedValue;
    public EntitlementUsage withConsumedValue(String consumedValue) {
        this.consumedValue = consumedValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxCount")
    public String maxCount;
    public EntitlementUsage withMaxCount(String maxCount) {
        this.maxCount = maxCount;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public EntitlementUsage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Unit")
    public EntitlementDataUnitEnum unit;
    public EntitlementUsage withUnit(EntitlementDataUnitEnum unit) {
        this.unit = unit;
        return this;
    }
}