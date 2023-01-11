package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetIdentityPoolConfigurationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public SetIdentityPoolConfigurationPathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}