package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePermissionGroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public CreatePermissionGroupPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}