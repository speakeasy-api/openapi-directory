package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PaymentDisputeActivity
 * This type is used by each recorded activity on a payment dispute, from creation to resolution.
**/
public class PaymentDisputeActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityDate")
    public String activityDate;
    public PaymentDisputeActivity withActivityDate(String activityDate) {
        this.activityDate = activityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activityType")
    public String activityType;
    public PaymentDisputeActivity withActivityType(String activityType) {
        this.activityType = activityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actor")
    public String actor;
    public PaymentDisputeActivity withActor(String actor) {
        this.actor = actor;
        return this;
    }
}