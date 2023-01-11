package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeCustomkeys1 {
    @SpeakeasyMetadata("security:name=X1123")
    public String apiKey;
    public SchemeCustomkeys1 withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}