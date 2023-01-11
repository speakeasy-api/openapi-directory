package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagsToResourceRequest {
    public AddTagsToResourceHeaders headers;
    public AddTagsToResourceRequest withHeaders(AddTagsToResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddTagsToResourceMessage request;
    public AddTagsToResourceRequest withRequest(openapisdk.models.shared.AddTagsToResourceMessage request) {
        this.request = request;
        return this;
    }
}