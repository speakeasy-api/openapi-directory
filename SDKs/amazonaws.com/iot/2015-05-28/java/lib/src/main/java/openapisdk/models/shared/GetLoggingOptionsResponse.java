package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetLoggingOptionsResponse
 * The output from the GetLoggingOptions operation.
**/
public class GetLoggingOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logLevel")
    public LogLevelEnum logLevel;
    public GetLoggingOptionsResponse withLogLevel(LogLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public GetLoggingOptionsResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}