package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveTagsFromResourceRequest {
    public RemoveTagsFromResourceHeaders headers;
    public RemoveTagsFromResourceRequest withHeaders(RemoveTagsFromResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RemoveTagsFromResourceMessage request;
    public RemoveTagsFromResourceRequest withRequest(openapisdk.models.shared.RemoveTagsFromResourceMessage request) {
        this.request = request;
        return this;
    }
}