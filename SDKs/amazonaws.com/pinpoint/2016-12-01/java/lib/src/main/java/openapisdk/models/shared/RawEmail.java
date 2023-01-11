package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RawEmail
 * Specifies the contents of an email message, represented as a raw MIME message.
**/
public class RawEmail {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public String data;
    public RawEmail withData(String data) {
        this.data = data;
        return this;
    }
}