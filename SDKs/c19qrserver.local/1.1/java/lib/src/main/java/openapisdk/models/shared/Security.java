package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeTokenHeader tokenHeader;
    public Security withTokenHeader(SchemeTokenHeader tokenHeader) {
        this.tokenHeader = tokenHeader;
        return this;
    }
}