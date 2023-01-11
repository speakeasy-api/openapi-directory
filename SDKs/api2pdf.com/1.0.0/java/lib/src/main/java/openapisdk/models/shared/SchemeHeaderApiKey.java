package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeHeaderApiKey {
    @SpeakeasyMetadata("security:name=Authorization")
    public String apiKey;
    public SchemeHeaderApiKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}