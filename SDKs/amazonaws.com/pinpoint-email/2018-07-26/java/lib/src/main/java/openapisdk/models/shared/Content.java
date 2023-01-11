package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Content
 * An object that represents the content of the email, and optionally a character set specification.
**/
public class Content {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Charset")
    public String charset;
    public Content withCharset(String charset) {
        this.charset = charset;
        return this;
    }
    @JsonProperty("Data")
    public String data;
    public Content withData(String data) {
        this.data = data;
        return this;
    }
}