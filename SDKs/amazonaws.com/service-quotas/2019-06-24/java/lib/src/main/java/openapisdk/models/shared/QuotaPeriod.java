package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * QuotaPeriod
 * Information about the quota period.
**/
public class QuotaPeriod {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PeriodUnit")
    public PeriodUnitEnum periodUnit;
    public QuotaPeriod withPeriodUnit(PeriodUnitEnum periodUnit) {
        this.periodUnit = periodUnit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PeriodValue")
    public Long periodValue;
    public QuotaPeriod withPeriodValue(Long periodValue) {
        this.periodValue = periodValue;
        return this;
    }
}