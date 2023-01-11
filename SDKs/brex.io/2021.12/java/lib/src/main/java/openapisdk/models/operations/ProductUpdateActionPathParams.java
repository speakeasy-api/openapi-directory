package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductUpdateActionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=action")
    public String action;
    public ProductUpdateActionPathParams withAction(String action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public ProductUpdateActionPathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
}