package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GenerateRandomResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Plaintext")
    public String plaintext;
    public GenerateRandomResponse withPlaintext(String plaintext) {
        this.plaintext = plaintext;
        return this;
    }
}