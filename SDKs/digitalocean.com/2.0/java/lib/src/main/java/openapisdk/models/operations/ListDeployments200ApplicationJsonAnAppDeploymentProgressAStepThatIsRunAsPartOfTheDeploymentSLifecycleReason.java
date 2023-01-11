package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycleReason withMessage(String message) {
        this.message = message;
        return this;
    }
}