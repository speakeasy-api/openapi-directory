package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class VerifyOtpIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauthsecurity oauthsecurity;
    public VerifyOtpIdSecurity withOauthsecurity(openapisdk.models.shared.SchemeOauthsecurity oauthsecurity) {
        this.oauthsecurity = oauthsecurity;
        return this;
    }
}