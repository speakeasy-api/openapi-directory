package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeJwt {
    @SpeakeasyMetadata("security:name=X-Appwrite-JWT")
    public String apiKey;
    public SchemeJwt withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}