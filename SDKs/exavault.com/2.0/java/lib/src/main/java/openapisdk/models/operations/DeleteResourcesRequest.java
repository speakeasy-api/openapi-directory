package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResourcesRequest {
    public DeleteResourcesHeaders headers;
    public DeleteResourcesRequest withHeaders(DeleteResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteResourcesDeleteResourcesRequestBody request;
    public DeleteResourcesRequest withRequest(DeleteResourcesDeleteResourcesRequestBody request) {
        this.request = request;
        return this;
    }
}