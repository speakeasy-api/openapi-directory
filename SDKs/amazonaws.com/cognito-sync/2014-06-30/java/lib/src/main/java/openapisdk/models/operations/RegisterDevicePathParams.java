package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterDevicePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityId")
    public String identityId;
    public RegisterDevicePathParams withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public RegisterDevicePathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}