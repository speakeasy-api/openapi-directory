package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EdgeStatistics
 * Response statistics for an edge.
**/
public class EdgeStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorStatistics")
    public ErrorStatistics errorStatistics;
    public EdgeStatistics withErrorStatistics(ErrorStatistics errorStatistics) {
        this.errorStatistics = errorStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaultStatistics")
    public FaultStatistics faultStatistics;
    public EdgeStatistics withFaultStatistics(FaultStatistics faultStatistics) {
        this.faultStatistics = faultStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OkCount")
    public Long okCount;
    public EdgeStatistics withOkCount(Long okCount) {
        this.okCount = okCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCount")
    public Long totalCount;
    public EdgeStatistics withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalResponseTime")
    public Double totalResponseTime;
    public EdgeStatistics withTotalResponseTime(Double totalResponseTime) {
        this.totalResponseTime = totalResponseTime;
        return this;
    }
}