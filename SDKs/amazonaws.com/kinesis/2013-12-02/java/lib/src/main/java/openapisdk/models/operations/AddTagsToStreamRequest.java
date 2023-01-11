package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagsToStreamRequest {
    public AddTagsToStreamHeaders headers;
    public AddTagsToStreamRequest withHeaders(AddTagsToStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddTagsToStreamInput request;
    public AddTagsToStreamRequest withRequest(openapisdk.models.shared.AddTagsToStreamInput request) {
        this.request = request;
        return this;
    }
}