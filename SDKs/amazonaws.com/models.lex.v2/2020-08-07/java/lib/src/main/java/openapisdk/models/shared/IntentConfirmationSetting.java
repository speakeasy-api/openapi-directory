package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IntentConfirmationSetting
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
public class IntentConfirmationSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public IntentConfirmationSetting withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("declinationResponse")
    public ResponseSpecification declinationResponse;
    public IntentConfirmationSetting withDeclinationResponse(ResponseSpecification declinationResponse) {
        this.declinationResponse = declinationResponse;
        return this;
    }
    @JsonProperty("promptSpecification")
    public PromptSpecification promptSpecification;
    public IntentConfirmationSetting withPromptSpecification(PromptSpecification promptSpecification) {
        this.promptSpecification = promptSpecification;
        return this;
    }
}