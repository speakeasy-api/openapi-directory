package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDatasetsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityId")
    public String identityId;
    public ListDatasetsPathParams withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public ListDatasetsPathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}