package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OauthAuthorizationsGetAuthorizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorization_id")
    public Long authorizationId;
    public OauthAuthorizationsGetAuthorizationPathParams withAuthorizationId(Long authorizationId) {
        this.authorizationId = authorizationId;
        return this;
    }
}