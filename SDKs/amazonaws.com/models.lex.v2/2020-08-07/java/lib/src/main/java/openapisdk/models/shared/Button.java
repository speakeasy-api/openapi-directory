package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Button
 * Describes a button to use on a response card used to gather slot values from a user.
**/
public class Button {
    @JsonProperty("text")
    public String text;
    public Button withText(String text) {
        this.text = text;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public Button withValue(String value) {
        this.value = value;
        return this;
    }
}