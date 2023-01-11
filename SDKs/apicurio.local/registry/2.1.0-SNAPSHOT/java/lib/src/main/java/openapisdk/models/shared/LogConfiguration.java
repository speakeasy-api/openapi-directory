package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class LogConfiguration {
    @JsonProperty("level")
    public LogLevelEnum level;
    public LogConfiguration withLevel(LogLevelEnum level) {
        this.level = level;
        return this;
    }
}