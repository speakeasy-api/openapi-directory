package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveTagsFromStreamRequest {
    public RemoveTagsFromStreamHeaders headers;
    public RemoveTagsFromStreamRequest withHeaders(RemoveTagsFromStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveTagsFromStreamInput request;
    public RemoveTagsFromStreamRequest withRequest(openapisdk.models.shared.RemoveTagsFromStreamInput request) {
        this.request = request;
        return this;
    }
}