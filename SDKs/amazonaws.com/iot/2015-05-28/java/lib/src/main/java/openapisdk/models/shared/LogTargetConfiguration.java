package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LogTargetConfiguration
 * The target configuration.
**/
public class LogTargetConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logLevel")
    public LogLevelEnum logLevel;
    public LogTargetConfiguration withLogLevel(LogLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logTarget")
    public LogTarget logTarget;
    public LogTargetConfiguration withLogTarget(LogTarget logTarget) {
        this.logTarget = logTarget;
        return this;
    }
}