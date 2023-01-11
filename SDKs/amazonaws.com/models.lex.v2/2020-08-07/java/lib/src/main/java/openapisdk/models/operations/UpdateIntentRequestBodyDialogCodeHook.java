package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateIntentRequestBodyDialogCodeHook
 * Settings that determine the Lambda function that Amazon Lex uses for processing user responses.
**/
public class UpdateIntentRequestBodyDialogCodeHook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public UpdateIntentRequestBodyDialogCodeHook withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
}