package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public CreateTagPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}