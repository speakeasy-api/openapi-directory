package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatisticsIdSecurity {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public openapisdk.models.shared.SchemeOauthsecurity oauthsecurity;
    public GetStatisticsIdSecurity withOauthsecurity(openapisdk.models.shared.SchemeOauthsecurity oauthsecurity) {
        this.oauthsecurity = oauthsecurity;
        return this;
    }
}