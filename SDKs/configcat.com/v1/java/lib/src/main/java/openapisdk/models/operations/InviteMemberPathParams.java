package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InviteMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=productId")
    public String productId;
    public InviteMemberPathParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
}