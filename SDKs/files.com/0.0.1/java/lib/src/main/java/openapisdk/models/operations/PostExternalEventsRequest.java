package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostExternalEventsRequest {
    @SpeakeasyMetadata("request:mediaType=multipart/form-data")
    public PostExternalEventsRequestBody request;
    public PostExternalEventsRequest withRequest(PostExternalEventsRequestBody request) {
        this.request = request;
        return this;
    }
}