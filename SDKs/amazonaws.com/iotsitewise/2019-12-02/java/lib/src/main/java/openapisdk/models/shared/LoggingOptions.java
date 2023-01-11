package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LoggingOptions
 * Contains logging options.
**/
public class LoggingOptions {
    @JsonProperty("level")
    public LoggingLevelEnum level;
    public LoggingOptions withLevel(LoggingLevelEnum level) {
        this.level = level;
        return this;
    }
}