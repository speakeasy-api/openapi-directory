package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment_policy_id")
    public String paymentPolicyId;
    public GetPaymentPolicyPathParams withPaymentPolicyId(String paymentPolicyId) {
        this.paymentPolicyId = paymentPolicyId;
        return this;
    }
}