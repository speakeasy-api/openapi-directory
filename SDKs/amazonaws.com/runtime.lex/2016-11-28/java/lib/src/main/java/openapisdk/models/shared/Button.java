package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Button
 * Represents an option to be shown on the client platform (Facebook, Slack, etc.)
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