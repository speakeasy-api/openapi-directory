package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeCustomkey2 {
    @SpeakeasyMetadata("security:name=X-2")
    public String apiKey;
    public SchemeCustomkey2 withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}