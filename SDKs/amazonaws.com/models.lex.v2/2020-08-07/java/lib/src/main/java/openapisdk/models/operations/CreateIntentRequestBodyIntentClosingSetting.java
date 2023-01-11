package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateIntentRequestBodyIntentClosingSetting
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
**/
public class CreateIntentRequestBodyIntentClosingSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public CreateIntentRequestBodyIntentClosingSetting withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closingResponse")
    public openapisdk.models.shared.ResponseSpecification closingResponse;
    public CreateIntentRequestBodyIntentClosingSetting withClosingResponse(openapisdk.models.shared.ResponseSpecification closingResponse) {
        this.closingResponse = closingResponse;
        return this;
    }
}