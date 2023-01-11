package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductRetrievePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public ProductRetrievePathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}