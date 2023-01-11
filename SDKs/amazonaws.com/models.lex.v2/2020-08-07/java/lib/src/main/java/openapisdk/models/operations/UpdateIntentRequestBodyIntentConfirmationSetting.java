package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateIntentRequestBodyIntentConfirmationSetting
 * Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
**/
public class UpdateIntentRequestBodyIntentConfirmationSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public UpdateIntentRequestBodyIntentConfirmationSetting withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("declinationResponse")
    public openapisdk.models.shared.ResponseSpecification declinationResponse;
    public UpdateIntentRequestBodyIntentConfirmationSetting withDeclinationResponse(openapisdk.models.shared.ResponseSpecification declinationResponse) {
        this.declinationResponse = declinationResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("promptSpecification")
    public openapisdk.models.shared.PromptSpecification promptSpecification;
    public UpdateIntentRequestBodyIntentConfirmationSetting withPromptSpecification(openapisdk.models.shared.PromptSpecification promptSpecification) {
        this.promptSpecification = promptSpecification;
        return this;
    }
}