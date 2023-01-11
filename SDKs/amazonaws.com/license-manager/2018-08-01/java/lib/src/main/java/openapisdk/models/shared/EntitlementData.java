package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EntitlementData
 * Data associated with an entitlement resource.
**/
public class EntitlementData {
    @JsonProperty("Name")
    public String name;
    public EntitlementData withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Unit")
    public EntitlementDataUnitEnum unit;
    public EntitlementData withUnit(EntitlementDataUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public EntitlementData withValue(String value) {
        this.value = value;
        return this;
    }
}