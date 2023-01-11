package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SaveCreditCardInfoRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreditCardInfo request;
    public SaveCreditCardInfoRequest withRequest(openapisdk.models.shared.CreditCardInfo request) {
        this.request = request;
        return this;
    }
}