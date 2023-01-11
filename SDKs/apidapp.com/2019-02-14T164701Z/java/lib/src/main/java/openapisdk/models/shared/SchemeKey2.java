package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeKey2 {
    @SpeakeasyMetadata("security:name=X-Api-Key")
    public String apiKey;
    public SchemeKey2 withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}