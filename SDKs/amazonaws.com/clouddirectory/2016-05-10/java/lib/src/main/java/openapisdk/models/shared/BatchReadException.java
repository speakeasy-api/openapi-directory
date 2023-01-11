package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchReadException
 * The batch read exception structure, which contains the exception type and message.
**/
public class BatchReadException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public BatchReadException withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public BatchReadExceptionTypeEnum type;
    public BatchReadException withType(BatchReadExceptionTypeEnum type) {
        this.type = type;
        return this;
    }
}