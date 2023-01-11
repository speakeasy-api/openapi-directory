package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchemaAlreadyPublishedException
 * Indicates that a schema is already published.
**/
public class SchemaAlreadyPublishedException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public SchemaAlreadyPublishedException withMessage(String message) {
        this.message = message;
        return this;
    }
}