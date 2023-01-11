package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShippingFulfillmentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fulfillmentId")
    public String fulfillmentId;
    public GetShippingFulfillmentPathParams withFulfillmentId(String fulfillmentId) {
        this.fulfillmentId = fulfillmentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public GetShippingFulfillmentPathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}