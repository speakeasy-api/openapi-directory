package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ProductNotifierCreatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=orderId")
    public String orderId;
    public ProductNotifierCreatePathParams withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=type")
    public String type;
    public ProductNotifierCreatePathParams withType(String type) {
        this.type = type;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uri")
    public String uri;
    public ProductNotifierCreatePathParams withUri(String uri) {
        this.uri = uri;
        return this;
    }
}