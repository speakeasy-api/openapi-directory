package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FaultStatistics
 * Information about requests that failed with a 5xx Server Error status code.
**/
public class FaultStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OtherCount")
    public Long otherCount;
    public FaultStatistics withOtherCount(Long otherCount) {
        this.otherCount = otherCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCount")
    public Long totalCount;
    public FaultStatistics withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}