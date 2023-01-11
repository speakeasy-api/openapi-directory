package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddTagsRequest {
    public AddTagsHeaders headers;
    public AddTagsRequest withHeaders(AddTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AddTagsRequest request;
    public AddTagsRequest withRequest(openapisdk.models.shared.AddTagsRequest request) {
        this.request = request;
        return this;
    }
}