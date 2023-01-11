package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LoggerDefinitionVersion
 * Information about a logger definition version.
**/
public class LoggerDefinitionVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Loggers")
    public Logger[] loggers;
    public LoggerDefinitionVersion withLoggers(Logger[] loggers) {
        this.loggers = loggers;
        return this;
    }
}