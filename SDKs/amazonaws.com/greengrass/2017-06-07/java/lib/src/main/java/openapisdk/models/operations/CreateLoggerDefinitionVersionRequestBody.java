package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateLoggerDefinitionVersionRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Loggers")
    public openapisdk.models.shared.Logger[] loggers;
    public CreateLoggerDefinitionVersionRequestBody withLoggers(openapisdk.models.shared.Logger[] loggers) {
        this.loggers = loggers;
        return this;
    }
}