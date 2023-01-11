package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SendCustomVerificationEmailResponse
 * The following element is returned by the service.
**/
public class SendCustomVerificationEmailResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageId")
    public String messageId;
    public SendCustomVerificationEmailResponse withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}