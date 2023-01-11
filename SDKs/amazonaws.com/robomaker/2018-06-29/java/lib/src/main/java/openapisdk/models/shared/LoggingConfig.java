package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LoggingConfig
 * The logging configuration.
**/
public class LoggingConfig {
    @JsonProperty("recordAllRosTopics")
    public Boolean recordAllRosTopics;
    public LoggingConfig withRecordAllRosTopics(Boolean recordAllRosTopics) {
        this.recordAllRosTopics = recordAllRosTopics;
        return this;
    }
}