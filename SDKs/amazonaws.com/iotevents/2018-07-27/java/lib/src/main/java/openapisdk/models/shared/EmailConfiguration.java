package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailConfiguration
 * Contains the configuration information of email notifications.
**/
public class EmailConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("content")
    public EmailContent content;
    public EmailConfiguration withContent(EmailContent content) {
        this.content = content;
        return this;
    }
    @JsonProperty("from")
    public String from;
    public EmailConfiguration withFrom(String from) {
        this.from = from;
        return this;
    }
    @JsonProperty("recipients")
    public EmailRecipients recipients;
    public EmailConfiguration withRecipients(EmailRecipients recipients) {
        this.recipients = recipients;
        return this;
    }
}