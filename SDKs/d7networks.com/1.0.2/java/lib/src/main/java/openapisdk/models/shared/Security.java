package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public SchemeAuth auth;
    public Security withAuth(SchemeAuth auth) {
        this.auth = auth;
        return this;
    }
}