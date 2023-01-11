package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SmsConfiguration
 * Contains the configuration information of SMS notifications.
**/
public class SmsConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalMessage")
    public String additionalMessage;
    public SmsConfiguration withAdditionalMessage(String additionalMessage) {
        this.additionalMessage = additionalMessage;
        return this;
    }
    @JsonProperty("recipients")
    public RecipientDetail[] recipients;
    public SmsConfiguration withRecipients(RecipientDetail[] recipients) {
        this.recipients = recipients;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senderId")
    public String senderId;
    public SmsConfiguration withSenderId(String senderId) {
        this.senderId = senderId;
        return this;
    }
}