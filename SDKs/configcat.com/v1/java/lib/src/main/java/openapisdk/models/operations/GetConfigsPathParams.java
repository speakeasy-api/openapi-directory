package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetConfigsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public GetConfigsPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}