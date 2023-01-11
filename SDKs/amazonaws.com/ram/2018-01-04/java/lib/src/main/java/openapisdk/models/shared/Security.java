package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeHmac hmac;
    public Security withHmac(SchemeHmac hmac) {
        this.hmac = hmac;
        return this;
    }
}