package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OauthAuthorizationsDeleteAuthorizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorization_id")
    public Long authorizationId;
    public OauthAuthorizationsDeleteAuthorizationPathParams withAuthorizationId(Long authorizationId) {
        this.authorizationId = authorizationId;
        return this;
    }
}