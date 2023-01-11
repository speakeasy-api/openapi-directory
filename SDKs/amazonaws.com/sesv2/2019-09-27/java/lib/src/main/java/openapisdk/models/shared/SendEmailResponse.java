package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendEmailResponse
 * A unique message ID that you receive when an email is accepted for sending.
**/
public class SendEmailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageId")
    public String messageId;
    public SendEmailResponse withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}