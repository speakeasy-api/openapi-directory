package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoggingConfiguration
 * Consists of the logging role and the log group name.
**/
public class LoggingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LogGroupName")
    public String logGroupName;
    public LoggingConfiguration withLogGroupName(String logGroupName) {
        this.logGroupName = logGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoggingRole")
    public String loggingRole;
    public LoggingConfiguration withLoggingRole(String loggingRole) {
        this.loggingRole = loggingRole;
        return this;
    }
}