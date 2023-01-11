package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class Security {
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=header")
    public SchemeApiKeyHeaderAuth apiKeyHeaderAuth;
    public Security withApiKeyHeaderAuth(SchemeApiKeyHeaderAuth apiKeyHeaderAuth) {
        this.apiKeyHeaderAuth = apiKeyHeaderAuth;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public SchemeApiKeyQueryAuth apiKeyQueryAuth;
    public Security withApiKeyQueryAuth(SchemeApiKeyQueryAuth apiKeyQueryAuth) {
        this.apiKeyQueryAuth = apiKeyQueryAuth;
        return this;
    }
    @SpeakeasyMetadata("security:scheme=true,type=apiKey,subtype=query")
    public SchemeApiKey apiKey;
    public Security withApiKey(SchemeApiKey apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}