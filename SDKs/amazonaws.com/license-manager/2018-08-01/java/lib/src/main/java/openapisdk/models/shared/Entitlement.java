package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Entitlement
 * Describes a resource entitled for use with a license.
**/
public class Entitlement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllowCheckIn")
    public Boolean allowCheckIn;
    public Entitlement withAllowCheckIn(Boolean allowCheckIn) {
        this.allowCheckIn = allowCheckIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxCount")
    public Long maxCount;
    public Entitlement withMaxCount(Long maxCount) {
        this.maxCount = maxCount;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Entitlement withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Overage")
    public Boolean overage;
    public Entitlement withOverage(Boolean overage) {
        this.overage = overage;
        return this;
    }
    @JsonProperty("Unit")
    public EntitlementUnitEnum unit;
    public Entitlement withUnit(EntitlementUnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public Entitlement withValue(String value) {
        this.value = value;
        return this;
    }
}