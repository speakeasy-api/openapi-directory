package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateBillingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billingGroupName")
    public String billingGroupName;
    public CreateBillingGroupPathParams withBillingGroupName(String billingGroupName) {
        this.billingGroupName = billingGroupName;
        return this;
    }
}