package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeTokenHeader {
    @SpeakeasyMetadata("security:name=token")
    public String apiKey;
    public SchemeTokenHeader withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}