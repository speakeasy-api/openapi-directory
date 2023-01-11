package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPermissionGroupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public GetPermissionGroupsPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}