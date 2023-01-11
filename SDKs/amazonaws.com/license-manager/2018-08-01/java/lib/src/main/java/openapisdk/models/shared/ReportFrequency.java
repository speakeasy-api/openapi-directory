package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportFrequency
 * Details on how frequently reports are generated.
**/
public class ReportFrequency {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public ReportFrequencyTypeEnum period;
    public ReportFrequency withPeriod(ReportFrequencyTypeEnum period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Long value;
    public ReportFrequency withValue(Long value) {
        this.value = value;
        return this;
    }
}