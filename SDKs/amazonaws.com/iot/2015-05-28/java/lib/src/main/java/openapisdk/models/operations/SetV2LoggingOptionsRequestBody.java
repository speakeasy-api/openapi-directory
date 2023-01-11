package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetV2LoggingOptionsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLogLevel")
    public SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum defaultLogLevel;
    public SetV2LoggingOptionsRequestBody withDefaultLogLevel(SetV2LoggingOptionsRequestBodyDefaultLogLevelEnum defaultLogLevel) {
        this.defaultLogLevel = defaultLogLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableAllLogs")
    public Boolean disableAllLogs;
    public SetV2LoggingOptionsRequestBody withDisableAllLogs(Boolean disableAllLogs) {
        this.disableAllLogs = disableAllLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public SetV2LoggingOptionsRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}