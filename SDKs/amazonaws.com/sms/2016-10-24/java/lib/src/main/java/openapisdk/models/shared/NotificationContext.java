package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NotificationContext
 * Contains the status of validating an application.
**/
public class NotificationContext {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ValidationStatusEnum status;
    public NotificationContext withStatus(ValidationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusMessage")
    public String statusMessage;
    public NotificationContext withStatusMessage(String statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validationId")
    public String validationId;
    public NotificationContext withValidationId(String validationId) {
        this.validationId = validationId;
        return this;
    }
}