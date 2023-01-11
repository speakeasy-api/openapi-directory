package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeApplicationId {
    @SpeakeasyMetadata("security:name=x-apideck-app-id")
    public String apiKey;
    public SchemeApplicationId withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}