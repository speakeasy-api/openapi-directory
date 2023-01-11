package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIdentityPoolConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public GetIdentityPoolConfigurationPathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}