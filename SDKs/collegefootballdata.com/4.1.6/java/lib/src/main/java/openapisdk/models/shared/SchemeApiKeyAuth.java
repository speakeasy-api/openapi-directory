package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiKeyAuth {
    @SpeakeasyMetadata("security:name=Authorization")
    public String apiKey;
    public SchemeApiKeyAuth withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}