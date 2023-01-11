package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagsRequest {
    public CreateTagsHeaders headers;
    public CreateTagsRequest withHeaders(CreateTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTagsRequest request;
    public CreateTagsRequest withRequest(openapisdk.models.shared.CreateTagsRequest request) {
        this.request = request;
        return this;
    }
}