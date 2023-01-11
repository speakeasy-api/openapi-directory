package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListThingsInBillingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billingGroupName")
    public String billingGroupName;
    public ListThingsInBillingGroupPathParams withBillingGroupName(String billingGroupName) {
        this.billingGroupName = billingGroupName;
        return this;
    }
}