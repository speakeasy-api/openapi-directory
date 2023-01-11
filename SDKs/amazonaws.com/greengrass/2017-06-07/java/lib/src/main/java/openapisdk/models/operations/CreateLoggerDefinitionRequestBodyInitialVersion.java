package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLoggerDefinitionRequestBodyInitialVersion
 * Information about a logger definition version.
**/
public class CreateLoggerDefinitionRequestBodyInitialVersion {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Loggers")
    public openapisdk.models.shared.Logger[] loggers;
    public CreateLoggerDefinitionRequestBodyInitialVersion withLoggers(openapisdk.models.shared.Logger[] loggers) {
        this.loggers = loggers;
        return this;
    }
}