package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeKey {
    @SpeakeasyMetadata("security:name=X-Appwrite-Key")
    public String apiKey;
    public SchemeKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}