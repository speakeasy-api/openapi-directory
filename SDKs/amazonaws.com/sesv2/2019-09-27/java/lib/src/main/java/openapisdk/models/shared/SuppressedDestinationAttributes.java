package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuppressedDestinationAttributes
 * An object that contains additional attributes that are related an email address that is on the suppression list for your account.
**/
public class SuppressedDestinationAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeedbackId")
    public String feedbackId;
    public SuppressedDestinationAttributes withFeedbackId(String feedbackId) {
        this.feedbackId = feedbackId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageId")
    public String messageId;
    public SuppressedDestinationAttributes withMessageId(String messageId) {
        this.messageId = messageId;
        return this;
    }
}