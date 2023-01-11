package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RouteSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataTraceEnabled")
    public java.util.Map<String, Object> dataTraceEnabled;
    public RouteSettings withDataTraceEnabled(java.util.Map<String, Object> dataTraceEnabled) {
        this.dataTraceEnabled = dataTraceEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetailedMetricsEnabled")
    public java.util.Map<String, Object> detailedMetricsEnabled;
    public RouteSettings withDetailedMetricsEnabled(java.util.Map<String, Object> detailedMetricsEnabled) {
        this.detailedMetricsEnabled = detailedMetricsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingLevel")
    public java.util.Map<String, Object> loggingLevel;
    public RouteSettings withLoggingLevel(java.util.Map<String, Object> loggingLevel) {
        this.loggingLevel = loggingLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThrottlingBurstLimit")
    public java.util.Map<String, Object> throttlingBurstLimit;
    public RouteSettings withThrottlingBurstLimit(java.util.Map<String, Object> throttlingBurstLimit) {
        this.throttlingBurstLimit = throttlingBurstLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThrottlingRateLimit")
    public java.util.Map<String, Object> throttlingRateLimit;
    public RouteSettings withThrottlingRateLimit(java.util.Map<String, Object> throttlingRateLimit) {
        this.throttlingRateLimit = throttlingRateLimit;
        return this;
    }
}