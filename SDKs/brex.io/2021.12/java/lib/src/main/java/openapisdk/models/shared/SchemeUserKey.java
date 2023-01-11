package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeUserKey {
    @SpeakeasyMetadata("security:name=user_key")
    public String apiKey;
    public SchemeUserKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}