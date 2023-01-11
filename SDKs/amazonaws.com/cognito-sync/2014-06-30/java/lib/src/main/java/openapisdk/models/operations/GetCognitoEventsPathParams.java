package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCognitoEventsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=IdentityPoolId")
    public String identityPoolId;
    public GetCognitoEventsPathParams withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
}