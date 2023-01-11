package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public ProductStatusPathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}