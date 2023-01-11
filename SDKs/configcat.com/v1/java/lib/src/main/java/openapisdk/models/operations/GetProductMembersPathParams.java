package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetProductMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public GetProductMembersPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}