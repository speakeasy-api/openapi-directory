package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * IntentClosingSetting
 * Provides a statement the Amazon Lex conveys to the user when the intent is successfully fulfilled.
**/
public class IntentClosingSetting {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public IntentClosingSetting withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("closingResponse")
    public ResponseSpecification closingResponse;
    public IntentClosingSetting withClosingResponse(ResponseSpecification closingResponse) {
        this.closingResponse = closingResponse;
        return this;
    }
}