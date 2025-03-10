/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EmailMessageActivity - Specifies the settings for an email activity in a journey. This type of activity sends an email message to participants.
 */
public class EmailMessageActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MessageConfig")
    public JourneyEmailMessage messageConfig;

    public EmailMessageActivity withMessageConfig(JourneyEmailMessage messageConfig) {
        this.messageConfig = messageConfig;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextActivity")
    public String nextActivity;

    public EmailMessageActivity withNextActivity(String nextActivity) {
        this.nextActivity = nextActivity;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateName")
    public String templateName;

    public EmailMessageActivity withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TemplateVersion")
    public String templateVersion;

    public EmailMessageActivity withTemplateVersion(String templateVersion) {
        this.templateVersion = templateVersion;
        return this;
    }
    
    public EmailMessageActivity(){}
}
