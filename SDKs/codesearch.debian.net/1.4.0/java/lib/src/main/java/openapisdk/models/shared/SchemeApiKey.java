package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiKey {
    @SpeakeasyMetadata("security:name=x-dcs-apikey")
    public String apiKey;
    public SchemeApiKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}