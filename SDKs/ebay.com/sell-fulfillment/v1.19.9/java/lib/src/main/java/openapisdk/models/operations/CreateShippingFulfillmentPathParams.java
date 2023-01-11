package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateShippingFulfillmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public CreateShippingFulfillmentPathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}