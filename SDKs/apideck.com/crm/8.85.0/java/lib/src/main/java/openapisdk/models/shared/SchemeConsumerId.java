package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeConsumerId {
    @SpeakeasyMetadata("security:name=x-apideck-consumer-id")
    public String apiKey;
    public SchemeConsumerId withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}