package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OauthAuthorizationsUpdateAuthorizationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=authorization_id")
    public Long authorizationId;
    public OauthAuthorizationsUpdateAuthorizationPathParams withAuthorizationId(Long authorizationId) {
        this.authorizationId = authorizationId;
        return this;
    }
}