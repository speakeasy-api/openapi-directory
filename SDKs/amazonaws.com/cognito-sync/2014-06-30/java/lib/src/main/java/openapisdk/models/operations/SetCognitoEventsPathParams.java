package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SetCognitoEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public SetCognitoEventsPathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}