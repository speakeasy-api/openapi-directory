package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SimpleEmailPart
 * Specifies the subject or body of an email message, represented as textual email data and the applicable character set.
**/
public class SimpleEmailPart {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charset")
    public String charset;
    public SimpleEmailPart withCharset(String charset) {
        this.charset = charset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public String data;
    public SimpleEmailPart withData(String data) {
        this.data = data;
        return this;
    }
}