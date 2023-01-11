package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudComponentStatus
 * Contains the status of a component in the IoT Greengrass service.
**/
public class CloudComponentStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentState")
    public CloudComponentStateEnum componentState;
    public CloudComponentStatus withComponentState(CloudComponentStateEnum componentState) {
        this.componentState = componentState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errors")
    public java.util.Map<String, String> errors;
    public CloudComponentStatus withErrors(java.util.Map<String, String> errors) {
        this.errors = errors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public CloudComponentStatus withMessage(String message) {
        this.message = message;
        return this;
    }
}