package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingGroupProperties
 * The properties of a billing group.
**/
public class BillingGroupProperties {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingGroupDescription")
    public String billingGroupDescription;
    public BillingGroupProperties withBillingGroupDescription(String billingGroupDescription) {
        this.billingGroupDescription = billingGroupDescription;
        return this;
    }
}