package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceLimit
 * Specifies a current quota for an Amazon Macie account.
**/
public class ServiceLimit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isServiceLimited")
    public Boolean isServiceLimited;
    public ServiceLimit withIsServiceLimited(Boolean isServiceLimited) {
        this.isServiceLimited = isServiceLimited;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public UnitEnum unit;
    public ServiceLimit withUnit(UnitEnum unit) {
        this.unit = unit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Long value;
    public ServiceLimit withValue(Long value) {
        this.value = value;
        return this;
    }
}