package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ErrorStatistics
 * Information about requests that failed with a 4xx Client Error status code.
**/
public class ErrorStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OtherCount")
    public Long otherCount;
    public ErrorStatistics withOtherCount(Long otherCount) {
        this.otherCount = otherCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThrottleCount")
    public Long throttleCount;
    public ErrorStatistics withThrottleCount(Long throttleCount) {
        this.throttleCount = throttleCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCount")
    public Long totalCount;
    public ErrorStatistics withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}