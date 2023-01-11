package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListRecurringDetailsRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public Object request;
    public PostListRecurringDetailsRequest withRequest(Object request) {
        this.request = request;
        return this;
    }
}