package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvalidSchemaDocException
 * Indicates that the provided <code>SchemaDoc</code> value is not valid.
**/
public class InvalidSchemaDocException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public InvalidSchemaDocException withMessage(String message) {
        this.message = message;
        return this;
    }
}