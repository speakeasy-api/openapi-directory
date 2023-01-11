package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddThingToBillingGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingGroupArn")
    public String billingGroupArn;
    public AddThingToBillingGroupRequestBody withBillingGroupArn(String billingGroupArn) {
        this.billingGroupArn = billingGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingGroupName")
    public String billingGroupName;
    public AddThingToBillingGroupRequestBody withBillingGroupName(String billingGroupName) {
        this.billingGroupName = billingGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingArn")
    public String thingArn;
    public AddThingToBillingGroupRequestBody withThingArn(String thingArn) {
        this.thingArn = thingArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public AddThingToBillingGroupRequestBody withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}