package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTagsRequest {
    public DeleteTagsPathParams pathParams;
    public DeleteTagsRequest withPathParams(DeleteTagsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public DeleteTagsHeaders headers;
    public DeleteTagsRequest withHeaders(DeleteTagsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteTagsRequestBody request;
    public DeleteTagsRequest withRequest(DeleteTagsRequestBody request) {
        this.request = request;
        return this;
    }
}