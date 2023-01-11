package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateEmailTemplateRequestBodyTemplateContent
 * The content of the email, composed of a subject line, an HTML part, and a text-only part.
**/
public class UpdateEmailTemplateRequestBodyTemplateContent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Html")
    public String html;
    public UpdateEmailTemplateRequestBodyTemplateContent withHtml(String html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subject")
    public String subject;
    public UpdateEmailTemplateRequestBodyTemplateContent withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;
    public UpdateEmailTemplateRequestBodyTemplateContent withText(String text) {
        this.text = text;
        return this;
    }
}