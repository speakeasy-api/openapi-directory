package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ForecastStatistics
 * The predicted high and low fault count. This is used to determine if a service has become anomalous and if an insight should be created.
**/
public class ForecastStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaultCountHigh")
    public Long faultCountHigh;
    public ForecastStatistics withFaultCountHigh(Long faultCountHigh) {
        this.faultCountHigh = faultCountHigh;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaultCountLow")
    public Long faultCountLow;
    public ForecastStatistics withFaultCountLow(Long faultCountLow) {
        this.faultCountLow = faultCountLow;
        return this;
    }
}