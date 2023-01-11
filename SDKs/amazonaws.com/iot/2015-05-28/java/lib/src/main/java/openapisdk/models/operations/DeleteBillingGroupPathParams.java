package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBillingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billingGroupName")
    public String billingGroupName;
    public DeleteBillingGroupPathParams withBillingGroupName(String billingGroupName) {
        this.billingGroupName = billingGroupName;
        return this;
    }
}