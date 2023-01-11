package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveTagsFromResourceRequest {
    public RemoveTagsFromResourceHeaders headers;
    public RemoveTagsFromResourceRequest withHeaders(RemoveTagsFromResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveTagsFromResourceRequest request;
    public RemoveTagsFromResourceRequest withRequest(openapisdk.models.shared.RemoveTagsFromResourceRequest request) {
        this.request = request;
        return this;
    }
}