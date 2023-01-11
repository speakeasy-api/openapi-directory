package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SsmlMessage
 * Defines a Speech Synthesis Markup Language (SSML) prompt.
**/
public class SsmlMessage {
    @JsonProperty("value")
    public String value;
    public SsmlMessage withValue(String value) {
        this.value = value;
        return this;
    }
}