package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SetV2LoggingLevelRequestBody {
    @JsonProperty("logLevel")
    public SetV2LoggingLevelRequestBodyLogLevelEnum logLevel;
    public SetV2LoggingLevelRequestBody withLogLevel(SetV2LoggingLevelRequestBodyLogLevelEnum logLevel) {
        this.logLevel = logLevel;
        return this;
    }
    @JsonProperty("logTarget")
    public SetV2LoggingLevelRequestBodyLogTarget logTarget;
    public SetV2LoggingLevelRequestBody withLogTarget(SetV2LoggingLevelRequestBodyLogTarget logTarget) {
        this.logTarget = logTarget;
        return this;
    }
}