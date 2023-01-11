package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GiftDetails
 * This type contains information about a digital gift card line item that was purchased as a gift, and sent to the recipient by email.
**/
public class GiftDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public GiftDetails withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipientEmail")
    public String recipientEmail;
    public GiftDetails withRecipientEmail(String recipientEmail) {
        this.recipientEmail = recipientEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senderName")
    public String senderName;
    public GiftDetails withSenderName(String senderName) {
        this.senderName = senderName;
        return this;
    }
}