package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RequestImpactStatistics
 * Statistics that describe how the incident has impacted a service.
**/
public class RequestImpactStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaultCount")
    public Long faultCount;
    public RequestImpactStatistics withFaultCount(Long faultCount) {
        this.faultCount = faultCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OkCount")
    public Long okCount;
    public RequestImpactStatistics withOkCount(Long okCount) {
        this.okCount = okCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCount")
    public Long totalCount;
    public RequestImpactStatistics withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}