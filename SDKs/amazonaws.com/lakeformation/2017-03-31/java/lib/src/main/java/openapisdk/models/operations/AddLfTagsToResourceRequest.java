package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddLfTagsToResourceRequest {
    public AddLfTagsToResourceHeaders headers;
    public AddLfTagsToResourceRequest withHeaders(AddLfTagsToResourceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddLfTagsToResourceRequest request;
    public AddLfTagsToResourceRequest withRequest(openapisdk.models.shared.AddLfTagsToResourceRequest request) {
        this.request = request;
        return this;
    }
}