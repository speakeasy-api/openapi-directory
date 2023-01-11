package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuditlogsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public GetAuditlogsPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}