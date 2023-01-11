package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=oauth2")
    public SchemeOauth oauth;
    public Security withOauth(SchemeOauth oauth) {
        this.oauth = oauth;
        return this;
    }
}