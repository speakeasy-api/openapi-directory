package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BulkEmailEntryResult
 * The result of the <code>SendBulkEmail</code> operation of each specified <code>BulkEmailEntry</code>.
**/
public class BulkEmailEntryResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public String error;
    public BulkEmailEntryResult withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageId")
    public String messageId;
    public BulkEmailEntryResult withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public BulkEmailStatusEnum status;
    public BulkEmailEntryResult withStatus(BulkEmailStatusEnum status) {
        this.status = status;
        return this;
    }
}