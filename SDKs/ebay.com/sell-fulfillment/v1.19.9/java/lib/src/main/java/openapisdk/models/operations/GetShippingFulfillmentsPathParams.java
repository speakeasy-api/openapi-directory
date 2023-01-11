package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShippingFulfillmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public GetShippingFulfillmentsPathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}