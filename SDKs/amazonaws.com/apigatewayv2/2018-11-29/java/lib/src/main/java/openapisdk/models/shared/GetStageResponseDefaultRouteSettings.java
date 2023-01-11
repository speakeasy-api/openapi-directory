package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetStageResponseDefaultRouteSettings
 * Default route settings for the stage.
**/
public class GetStageResponseDefaultRouteSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataTraceEnabled")
    public java.util.Map<String, Object> dataTraceEnabled;
    public GetStageResponseDefaultRouteSettings withDataTraceEnabled(java.util.Map<String, Object> dataTraceEnabled) {
        this.dataTraceEnabled = dataTraceEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetailedMetricsEnabled")
    public java.util.Map<String, Object> detailedMetricsEnabled;
    public GetStageResponseDefaultRouteSettings withDetailedMetricsEnabled(java.util.Map<String, Object> detailedMetricsEnabled) {
        this.detailedMetricsEnabled = detailedMetricsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingLevel")
    public java.util.Map<String, Object> loggingLevel;
    public GetStageResponseDefaultRouteSettings withLoggingLevel(java.util.Map<String, Object> loggingLevel) {
        this.loggingLevel = loggingLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThrottlingBurstLimit")
    public java.util.Map<String, Object> throttlingBurstLimit;
    public GetStageResponseDefaultRouteSettings withThrottlingBurstLimit(java.util.Map<String, Object> throttlingBurstLimit) {
        this.throttlingBurstLimit = throttlingBurstLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThrottlingRateLimit")
    public java.util.Map<String, Object> throttlingRateLimit;
    public GetStageResponseDefaultRouteSettings withThrottlingRateLimit(java.util.Map<String, Object> throttlingRateLimit) {
        this.throttlingRateLimit = throttlingRateLimit;
        return this;
    }
}