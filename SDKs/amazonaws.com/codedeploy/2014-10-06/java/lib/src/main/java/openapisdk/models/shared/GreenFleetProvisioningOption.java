package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GreenFleetProvisioningOption
 * Information about the instances that belong to the replacement environment in a blue/green deployment.
**/
public class GreenFleetProvisioningOption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public GreenFleetProvisioningActionEnum action;
    public GreenFleetProvisioningOption withAction(GreenFleetProvisioningActionEnum action) {
        this.action = action;
        return this;
    }
}