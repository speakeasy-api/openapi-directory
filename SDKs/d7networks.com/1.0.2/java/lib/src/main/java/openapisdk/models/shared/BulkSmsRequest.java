package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BulkSmsRequest
 * Bulk SMS Request
**/
public class BulkSmsRequest {
    @JsonProperty("messages")
    public Message[] messages;
    public BulkSmsRequest withMessages(Message[] messages) {
        this.messages = messages;
        return this;
    }
}