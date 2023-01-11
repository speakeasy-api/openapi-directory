package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetV2LoggingOptionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultLogLevel")
    public LogLevelEnum defaultLogLevel;
    public GetV2LoggingOptionsResponse withDefaultLogLevel(LogLevelEnum defaultLogLevel) {
        this.defaultLogLevel = defaultLogLevel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("disableAllLogs")
    public Boolean disableAllLogs;
    public GetV2LoggingOptionsResponse withDisableAllLogs(Boolean disableAllLogs) {
        this.disableAllLogs = disableAllLogs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public GetV2LoggingOptionsResponse withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}