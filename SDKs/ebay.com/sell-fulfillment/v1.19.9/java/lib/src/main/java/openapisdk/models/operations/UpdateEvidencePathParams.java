package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEvidencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment_dispute_id")
    public String paymentDisputeId;
    public UpdateEvidencePathParams withPaymentDisputeId(String paymentDisputeId) {
        this.paymentDisputeId = paymentDisputeId;
        return this;
    }
}