package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TopicClassificationRequestBody {
    @SpeakeasyMetadata("form:name=api_key")
    public String apiKey;
    public TopicClassificationRequestBody withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("form:name=text")
    public String text;
    public TopicClassificationRequestBody withText(String text) {
        this.text = text;
        return this;
    }
}