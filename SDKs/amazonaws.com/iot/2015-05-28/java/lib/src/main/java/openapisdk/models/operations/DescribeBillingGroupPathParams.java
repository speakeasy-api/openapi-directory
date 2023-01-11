package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeBillingGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=billingGroupName")
    public String billingGroupName;
    public DescribeBillingGroupPathParams withBillingGroupName(String billingGroupName) {
        this.billingGroupName = billingGroupName;
        return this;
    }
}