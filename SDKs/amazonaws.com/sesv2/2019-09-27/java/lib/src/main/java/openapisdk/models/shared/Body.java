package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Body
 * Represents the body of the email message.
**/
public class Body {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Html")
    public Content html;
    public Body withHtml(Content html) {
        this.html = html;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public Content text;
    public Body withText(Content text) {
        this.text = text;
        return this;
    }
}