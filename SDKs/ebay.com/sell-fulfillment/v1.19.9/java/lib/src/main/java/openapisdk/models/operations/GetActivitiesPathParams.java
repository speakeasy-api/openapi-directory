package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetActivitiesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=payment_dispute_id")
    public String paymentDisputeId;
    public GetActivitiesPathParams withPaymentDisputeId(String paymentDisputeId) {
        this.paymentDisputeId = paymentDisputeId;
        return this;
    }
}