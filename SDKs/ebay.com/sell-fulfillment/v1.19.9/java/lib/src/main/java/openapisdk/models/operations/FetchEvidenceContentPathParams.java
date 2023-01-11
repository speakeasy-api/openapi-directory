package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchEvidenceContentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment_dispute_id")
    public String paymentDisputeId;
    public FetchEvidenceContentPathParams withPaymentDisputeId(String paymentDisputeId) {
        this.paymentDisputeId = paymentDisputeId;
        return this;
    }
}