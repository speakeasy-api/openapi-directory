package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTagsRequest {
    public CreateTagsPathParams pathParams;
    public CreateTagsRequest withPathParams(CreateTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateTagsHeaders headers;
    public CreateTagsRequest withHeaders(CreateTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateTagsRequestBody request;
    public CreateTagsRequest withRequest(CreateTagsRequestBody request) {
        this.request = request;
        return this;
    }
}