package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePaymentPolicyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment_policy_id")
    public String paymentPolicyId;
    public UpdatePaymentPolicyPathParams withPaymentPolicyId(String paymentPolicyId) {
        this.paymentPolicyId = paymentPolicyId;
        return this;
    }
}