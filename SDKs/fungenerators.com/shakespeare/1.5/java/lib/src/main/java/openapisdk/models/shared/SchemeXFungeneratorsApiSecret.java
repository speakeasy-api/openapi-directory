package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeXFungeneratorsApiSecret {
    @SpeakeasyMetadata("security:name=X-Fungenerators-Api-Secret")
    public String apiKey;
    public SchemeXFungeneratorsApiSecret withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}