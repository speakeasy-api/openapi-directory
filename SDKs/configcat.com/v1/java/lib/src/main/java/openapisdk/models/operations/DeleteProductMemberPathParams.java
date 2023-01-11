package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProductMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public DeleteProductMemberPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=userId")
    public String userId;
    public DeleteProductMemberPathParams withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}