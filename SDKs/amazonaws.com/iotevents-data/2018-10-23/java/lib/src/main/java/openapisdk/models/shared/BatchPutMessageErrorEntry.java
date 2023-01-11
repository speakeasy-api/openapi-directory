package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchPutMessageErrorEntry
 * Contains information about the errors encountered.
**/
public class BatchPutMessageErrorEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorCode")
    public ErrorCodeEnum errorCode;
    public BatchPutMessageErrorEntry withErrorCode(ErrorCodeEnum errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorMessage")
    public String errorMessage;
    public BatchPutMessageErrorEntry withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("messageId")
    public String messageId;
    public BatchPutMessageErrorEntry withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}