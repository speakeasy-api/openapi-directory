package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeBearer {
    @SpeakeasyMetadata("security:name=Authorization")
    public String apiKey;
    public SchemeBearer withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}