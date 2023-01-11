package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchUpdateDetectorErrorEntry
 * Information about the error that occurred when attempting to update a detector.
**/
public class BatchUpdateDetectorErrorEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public ErrorCodeEnum errorCode;
    public BatchUpdateDetectorErrorEntry withErrorCode(ErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public BatchUpdateDetectorErrorEntry withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageId")
    public String messageId;
    public BatchUpdateDetectorErrorEntry withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}