package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateStageRequestBodyDefaultRouteSettings
 * Represents a collection of route settings.
**/
public class CreateStageRequestBodyDefaultRouteSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataTraceEnabled")
    public java.util.Map<String, Object> dataTraceEnabled;
    public CreateStageRequestBodyDefaultRouteSettings withDataTraceEnabled(java.util.Map<String, Object> dataTraceEnabled) {
        this.dataTraceEnabled = dataTraceEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DetailedMetricsEnabled")
    public java.util.Map<String, Object> detailedMetricsEnabled;
    public CreateStageRequestBodyDefaultRouteSettings withDetailedMetricsEnabled(java.util.Map<String, Object> detailedMetricsEnabled) {
        this.detailedMetricsEnabled = detailedMetricsEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingLevel")
    public java.util.Map<String, Object> loggingLevel;
    public CreateStageRequestBodyDefaultRouteSettings withLoggingLevel(java.util.Map<String, Object> loggingLevel) {
        this.loggingLevel = loggingLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThrottlingBurstLimit")
    public java.util.Map<String, Object> throttlingBurstLimit;
    public CreateStageRequestBodyDefaultRouteSettings withThrottlingBurstLimit(java.util.Map<String, Object> throttlingBurstLimit) {
        this.throttlingBurstLimit = throttlingBurstLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ThrottlingRateLimit")
    public java.util.Map<String, Object> throttlingRateLimit;
    public CreateStageRequestBodyDefaultRouteSettings withThrottlingRateLimit(java.util.Map<String, Object> throttlingRateLimit) {
        this.throttlingRateLimit = throttlingRateLimit;
        return this;
    }
}