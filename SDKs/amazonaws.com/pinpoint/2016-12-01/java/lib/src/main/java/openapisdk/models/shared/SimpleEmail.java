package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimpleEmail
 * Specifies the contents of an email message, composed of a subject, a text part, and an HTML part.
**/
public class SimpleEmail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HtmlPart")
    public SimpleEmailPart htmlPart;
    public SimpleEmail withHtmlPart(SimpleEmailPart htmlPart) {
        this.htmlPart = htmlPart;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Subject")
    public SimpleEmailPart subject;
    public SimpleEmail withSubject(SimpleEmailPart subject) {
        this.subject = subject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TextPart")
    public SimpleEmailPart textPart;
    public SimpleEmail withTextPart(SimpleEmailPart textPart) {
        this.textPart = textPart;
        return this;
    }
}