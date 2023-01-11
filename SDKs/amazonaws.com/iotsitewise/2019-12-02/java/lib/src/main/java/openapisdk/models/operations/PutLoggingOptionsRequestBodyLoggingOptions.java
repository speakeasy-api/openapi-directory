package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutLoggingOptionsRequestBodyLoggingOptions
 * Contains logging options.
**/
public class PutLoggingOptionsRequestBodyLoggingOptions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("level")
    public openapisdk.models.shared.LoggingLevelEnum level;
    public PutLoggingOptionsRequestBodyLoggingOptions withLevel(openapisdk.models.shared.LoggingLevelEnum level) {
        this.level = level;
        return this;
    }
}