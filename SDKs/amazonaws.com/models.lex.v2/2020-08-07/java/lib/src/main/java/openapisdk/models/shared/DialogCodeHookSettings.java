package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DialogCodeHookSettings
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
**/
public class DialogCodeHookSettings {
    @JsonProperty("enabled")
    public Boolean enabled;
    public DialogCodeHookSettings withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}