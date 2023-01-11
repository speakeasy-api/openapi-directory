package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPaymentDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=paymentUuid")
    public String paymentUuid;
    public GetPaymentDetailsPathParams withPaymentUuid(String paymentUuid) {
        this.paymentUuid = paymentUuid;
        return this;
    }
}