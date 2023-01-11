package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateBillingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billingGroupName")
    public String billingGroupName;
    public UpdateBillingGroupPathParams withBillingGroupName(String billingGroupName) {
        this.billingGroupName = billingGroupName;
        return this;
    }
}