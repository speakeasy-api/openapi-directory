package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateBillingGroupRequestBodyBillingGroupProperties
 * The properties of a billing group.
**/
public class UpdateBillingGroupRequestBodyBillingGroupProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingGroupDescription")
    public String billingGroupDescription;
    public UpdateBillingGroupRequestBodyBillingGroupProperties withBillingGroupDescription(String billingGroupDescription) {
        this.billingGroupDescription = billingGroupDescription;
        return this;
    }
}