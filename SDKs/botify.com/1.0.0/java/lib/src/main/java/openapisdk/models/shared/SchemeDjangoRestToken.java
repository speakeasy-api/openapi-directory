package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeDjangoRestToken {
    @SpeakeasyMetadata("security:name=Authorization")
    public String apiKey;
    public SchemeDjangoRestToken withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}