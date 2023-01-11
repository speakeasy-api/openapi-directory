package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeploymentReadyOption
 * Information about how traffic is rerouted to instances in a replacement environment in a blue/green deployment.
**/
public class DeploymentReadyOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionOnTimeout")
    public DeploymentReadyActionEnum actionOnTimeout;
    public DeploymentReadyOption withActionOnTimeout(DeploymentReadyActionEnum actionOnTimeout) {
        this.actionOnTimeout = actionOnTimeout;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("waitTimeInMinutes")
    public Long waitTimeInMinutes;
    public DeploymentReadyOption withWaitTimeInMinutes(Long waitTimeInMinutes) {
        this.waitTimeInMinutes = waitTimeInMinutes;
        return this;
    }
}