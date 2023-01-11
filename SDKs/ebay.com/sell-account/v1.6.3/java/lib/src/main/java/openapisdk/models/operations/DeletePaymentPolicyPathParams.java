package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePaymentPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment_policy_id")
    public String paymentPolicyId;
    public DeletePaymentPolicyPathParams withPaymentPolicyId(String paymentPolicyId) {
        this.paymentPolicyId = paymentPolicyId;
        return this;
    }
}