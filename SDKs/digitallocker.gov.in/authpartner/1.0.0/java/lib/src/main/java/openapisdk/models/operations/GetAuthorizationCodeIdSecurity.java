package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizationCodeIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauthAuthorizeCode oauthAuthorizeCode;
    public GetAuthorizationCodeIdSecurity withOauthAuthorizeCode(openapisdk.models.shared.SchemeOauthAuthorizeCode oauthAuthorizeCode) {
        this.oauthAuthorizeCode = oauthAuthorizeCode;
        return this;
    }
}