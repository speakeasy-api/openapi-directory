package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public SchemeAemAuth aemAuth;
    public Security withAemAuth(SchemeAemAuth aemAuth) {
        this.aemAuth = aemAuth;
        return this;
    }
}