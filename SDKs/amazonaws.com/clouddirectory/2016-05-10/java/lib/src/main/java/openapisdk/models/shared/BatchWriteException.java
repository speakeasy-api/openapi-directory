package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchWriteException
 * A <code>BatchWrite</code> exception has occurred.
**/
public class BatchWriteException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Index")
    public Long index;
    public BatchWriteException withIndex(Long index) {
        this.index = index;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Message")
    public String message;
    public BatchWriteException withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public BatchWriteExceptionTypeEnum type;
    public BatchWriteException withType(BatchWriteExceptionTypeEnum type) {
        this.type = type;
        return this;
    }
}