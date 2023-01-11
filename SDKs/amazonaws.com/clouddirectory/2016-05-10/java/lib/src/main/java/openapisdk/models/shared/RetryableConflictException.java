package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RetryableConflictException
 * Occurs when a conflict with a previous successful write is detected. For example, if a write operation occurs on an object and then an attempt is made to read the object using “SERIALIZABLE” consistency, this exception may result. This generally occurs when the previous write did not have time to propagate to the host serving the current request. A retry (with appropriate backoff logic) is the recommended response to this exception.
**/
public class RetryableConflictException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public RetryableConflictException withMessage(String message) {
        this.message = message;
        return this;
    }
}