package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiKeyQueryAuth {
    @SpeakeasyMetadata("security:name=api_key")
    public String apiKey;
    public SchemeApiKeyQueryAuth withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}