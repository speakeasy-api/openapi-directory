package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=http,subtype=basic")
    public SchemeBasicAuth basicAuth;
    public Security withBasicAuth(SchemeBasicAuth basicAuth) {
        this.basicAuth = basicAuth;
        return this;
    }
}