package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SetLoggingOptionsRequestBodyLoggingOptionsPayload
 * Describes the logging options payload.
**/
public class SetLoggingOptionsRequestBodyLoggingOptionsPayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logLevel")
    public openapisdk.models.shared.LogLevelEnum logLevel;
    public SetLoggingOptionsRequestBodyLoggingOptionsPayload withLogLevel(openapisdk.models.shared.LogLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public SetLoggingOptionsRequestBodyLoggingOptionsPayload withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}