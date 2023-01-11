package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TemplateConfiguration
 * Specifies the message template to use for the message, for each type of channel.
**/
public class TemplateConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmailTemplate")
    public Template emailTemplate;
    public TemplateConfiguration withEmailTemplate(Template emailTemplate) {
        this.emailTemplate = emailTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PushTemplate")
    public Template pushTemplate;
    public TemplateConfiguration withPushTemplate(Template pushTemplate) {
        this.pushTemplate = pushTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SMSTemplate")
    public Template smsTemplate;
    public TemplateConfiguration withSmsTemplate(Template smsTemplate) {
        this.smsTemplate = smsTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VoiceTemplate")
    public Template voiceTemplate;
    public TemplateConfiguration withVoiceTemplate(Template voiceTemplate) {
        this.voiceTemplate = voiceTemplate;
        return this;
    }
}