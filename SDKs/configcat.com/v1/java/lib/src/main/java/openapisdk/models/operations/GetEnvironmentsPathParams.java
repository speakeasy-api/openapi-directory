package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnvironmentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public GetEnvironmentsPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}