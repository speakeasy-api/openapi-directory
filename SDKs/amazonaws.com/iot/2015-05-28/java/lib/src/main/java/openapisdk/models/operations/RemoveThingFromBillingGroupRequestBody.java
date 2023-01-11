package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RemoveThingFromBillingGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingGroupArn")
    public String billingGroupArn;
    public RemoveThingFromBillingGroupRequestBody withBillingGroupArn(String billingGroupArn) {
        this.billingGroupArn = billingGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingGroupName")
    public String billingGroupName;
    public RemoveThingFromBillingGroupRequestBody withBillingGroupName(String billingGroupName) {
        this.billingGroupName = billingGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingArn")
    public String thingArn;
    public RemoveThingFromBillingGroupRequestBody withThingArn(String thingArn) {
        this.thingArn = thingArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingName")
    public String thingName;
    public RemoveThingFromBillingGroupRequestBody withThingName(String thingName) {
        this.thingName = thingName;
        return this;
    }
}