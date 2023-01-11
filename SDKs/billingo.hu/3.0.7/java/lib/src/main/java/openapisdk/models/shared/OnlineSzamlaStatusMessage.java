package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OnlineSzamlaStatusMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("human_readable_message")
    public String humanReadableMessage;
    public OnlineSzamlaStatusMessage withHumanReadableMessage(String humanReadableMessage) {
        this.humanReadableMessage = humanReadableMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validation_error_code")
    public String validationErrorCode;
    public OnlineSzamlaStatusMessage withValidationErrorCode(String validationErrorCode) {
        this.validationErrorCode = validationErrorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validation_result_code")
    public String validationResultCode;
    public OnlineSzamlaStatusMessage withValidationResultCode(String validationResultCode) {
        this.validationResultCode = validationResultCode;
        return this;
    }
}