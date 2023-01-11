package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceStatistics
 * Response statistics for a service.
**/
public class ServiceStatistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorStatistics")
    public ErrorStatistics errorStatistics;
    public ServiceStatistics withErrorStatistics(ErrorStatistics errorStatistics) {
        this.errorStatistics = errorStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FaultStatistics")
    public FaultStatistics faultStatistics;
    public ServiceStatistics withFaultStatistics(FaultStatistics faultStatistics) {
        this.faultStatistics = faultStatistics;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OkCount")
    public Long okCount;
    public ServiceStatistics withOkCount(Long okCount) {
        this.okCount = okCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalCount")
    public Long totalCount;
    public ServiceStatistics withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TotalResponseTime")
    public Double totalResponseTime;
    public ServiceStatistics withTotalResponseTime(Double totalResponseTime) {
        this.totalResponseTime = totalResponseTime;
        return this;
    }
}