package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeApiKey apiKey;
    public Security withApiKey(SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeApplicationId applicationId;
    public Security withApplicationId(SchemeApplicationId applicationId) {
        this.applicationId = applicationId;
        return this;
    }
}