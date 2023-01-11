package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LogsRequestBody {
    @JsonProperty("logType")
    public LogTypeEnum logType;
    public LogsRequestBody withLogType(LogTypeEnum logType) {
        this.logType = logType;
        return this;
    }
}