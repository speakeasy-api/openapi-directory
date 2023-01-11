package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=client_id")
    public String clientId;
    public OauthAuthorizationsGetOrCreateAuthorizationForAppPathParams withClientId(String clientId) {
        this.clientId = clientId;
        return this;
    }
}