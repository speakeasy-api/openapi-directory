package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TopicClassificationRequest {
    @SpeakeasyMetadata("request:mediaType=application/x-www-form-urlencoded")
    public TopicClassificationRequestBody request;
    public TopicClassificationRequest withRequest(TopicClassificationRequestBody request) {
        this.request = request;
        return this;
    }
}