package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=bearer")
    public SchemePersonalAccessToken personalAccessToken;
    public Security withPersonalAccessToken(SchemePersonalAccessToken personalAccessToken) {
        this.personalAccessToken = personalAccessToken;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public SchemeOauth2 oauth2;
    public Security withOauth2(SchemeOauth2 oauth2) {
        this.oauth2 = oauth2;
        return this;
    }
}