package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MessageTemplateType
 * The message template structure.
**/
public class MessageTemplateType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailMessage")
    public String emailMessage;
    public MessageTemplateType withEmailMessage(String emailMessage) {
        this.emailMessage = emailMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailSubject")
    public String emailSubject;
    public MessageTemplateType withEmailSubject(String emailSubject) {
        this.emailSubject = emailSubject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SMSMessage")
    public String smsMessage;
    public MessageTemplateType withSmsMessage(String smsMessage) {
        this.smsMessage = smsMessage;
        return this;
    }
}