package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CustomPayload
 * A custom response string that Amazon Lex sends to your application. You define the content and structure the string.
**/
public class CustomPayload {
    @JsonProperty("value")
    public String value;
    public CustomPayload withValue(String value) {
        this.value = value;
        return this;
    }
}