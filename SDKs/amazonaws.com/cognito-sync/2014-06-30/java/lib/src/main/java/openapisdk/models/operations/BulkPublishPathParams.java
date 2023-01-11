package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BulkPublishPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public BulkPublishPathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}