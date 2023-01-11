package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBulkPublishDetailsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public GetBulkPublishDetailsPathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}