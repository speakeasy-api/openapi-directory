package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeLocale {
    @SpeakeasyMetadata("security:name=X-Appwrite-Locale")
    public String apiKey;
    public SchemeLocale withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}