package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EmailTemplateContent
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
public class EmailTemplateContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Html")
    public String html;
    public EmailTemplateContent withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subject")
    public String subject;
    public EmailTemplateContent withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;
    public EmailTemplateContent withText(String text) {
        this.text = text;
        return this;
    }
}