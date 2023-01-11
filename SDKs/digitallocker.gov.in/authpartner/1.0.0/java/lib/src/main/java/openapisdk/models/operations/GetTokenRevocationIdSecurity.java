package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenRevocationIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauthsecurity oauthsecurity;
    public GetTokenRevocationIdSecurity withOauthsecurity(openapisdk.models.shared.SchemeOauthsecurity oauthsecurity) {
        this.oauthsecurity = oauthsecurity;
        return this;
    }
}