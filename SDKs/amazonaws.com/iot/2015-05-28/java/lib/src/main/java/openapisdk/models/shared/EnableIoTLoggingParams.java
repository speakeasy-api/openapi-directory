package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EnableIoTLoggingParams
 * Parameters used when defining a mitigation action that enable Amazon Web Services IoT Core logging.
**/
public class EnableIoTLoggingParams {
    @JsonProperty("logLevel")
    public LogLevelEnum logLevel;
    public EnableIoTLoggingParams withLogLevel(LogLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
    @JsonProperty("roleArnForLogging")
    public String roleArnForLogging;
    public EnableIoTLoggingParams withRoleArnForLogging(String roleArnForLogging) {
        this.roleArnForLogging = roleArnForLogging;
        return this;
    }
}