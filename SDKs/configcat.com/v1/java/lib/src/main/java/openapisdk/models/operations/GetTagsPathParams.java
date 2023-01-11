package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTagsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public GetTagsPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}