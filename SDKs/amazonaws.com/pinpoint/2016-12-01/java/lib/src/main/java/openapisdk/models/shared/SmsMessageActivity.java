package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SmsMessageActivity
 * Specifies the settings for an SMS activity in a journey. This type of activity sends a text message to participants.
**/
public class SmsMessageActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageConfig")
    public JourneySmsMessage messageConfig;
    public SmsMessageActivity withMessageConfig(JourneySmsMessage messageConfig) {
        this.messageConfig = messageConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextActivity")
    public String nextActivity;
    public SmsMessageActivity withNextActivity(String nextActivity) {
        this.nextActivity = nextActivity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateName")
    public String templateName;
    public SmsMessageActivity withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateVersion")
    public String templateVersion;
    public SmsMessageActivity withTemplateVersion(String templateVersion) {
        this.templateVersion = templateVersion;
        return this;
    }
}