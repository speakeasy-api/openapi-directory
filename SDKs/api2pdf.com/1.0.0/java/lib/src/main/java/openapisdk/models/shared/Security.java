package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeHeaderApiKey headerApiKey;
    public Security withHeaderApiKey(SchemeHeaderApiKey headerApiKey) {
        this.headerApiKey = headerApiKey;
        return this;
    }
}