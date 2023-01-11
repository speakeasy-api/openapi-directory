package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeClientId {
    @SpeakeasyMetadata("security:name=X-APISETU-CLIENTID")
    public String apiKey;
    public SchemeClientId withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}