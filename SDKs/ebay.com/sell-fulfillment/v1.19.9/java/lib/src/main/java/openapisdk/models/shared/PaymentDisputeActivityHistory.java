package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentDisputeActivityHistory
 * This type is used by the base response of the getActivities method, and includes a log of all activities of a payment dispute, from creation to resolution.
**/
public class PaymentDisputeActivityHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activity")
    public PaymentDisputeActivity[] activity;
    public PaymentDisputeActivityHistory withActivity(PaymentDisputeActivity[] activity) {
        this.activity = activity;
        return this;
    }
}