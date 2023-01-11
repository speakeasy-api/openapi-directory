package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOrderPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public GetOrderPathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}