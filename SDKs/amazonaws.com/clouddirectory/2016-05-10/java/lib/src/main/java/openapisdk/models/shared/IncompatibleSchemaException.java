package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IncompatibleSchemaException
 * Indicates a failure occurred while performing a check for backward compatibility between the specified schema and the schema that is currently applied to the directory.
**/
public class IncompatibleSchemaException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public IncompatibleSchemaException withMessage(String message) {
        this.message = message;
        return this;
    }
}