package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiKeyHeaderAuth {
    @SpeakeasyMetadata("security:name=X-Api-Key")
    public String apiKey;
    public SchemeApiKeyHeaderAuth withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}