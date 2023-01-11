package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveTagsRequest {
    public RemoveTagsHeaders headers;
    public RemoveTagsRequest withHeaders(RemoveTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveTagsInput request;
    public RemoveTagsRequest withRequest(openapisdk.models.shared.RemoveTagsInput request) {
        this.request = request;
        return this;
    }
}