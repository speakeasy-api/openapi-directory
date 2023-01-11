package openapisdk.models.shared;

import openapisdk.utils.SpeakeasyMetadata;

public class SchemeProject {
    @SpeakeasyMetadata("security:name=X-Appwrite-Project")
    public String apiKey;
    public SchemeProject withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
}