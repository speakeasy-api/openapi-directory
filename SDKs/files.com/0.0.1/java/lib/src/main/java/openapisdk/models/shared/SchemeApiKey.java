package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApiKey {
    @SpeakeasyMetadata("security:name=X-FilesAPI-Key")
    public String apiKey;
    public SchemeApiKey withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}