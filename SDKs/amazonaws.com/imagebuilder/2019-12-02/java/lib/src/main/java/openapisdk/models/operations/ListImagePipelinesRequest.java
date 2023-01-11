package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListImagePipelinesRequest {
    public ListImagePipelinesQueryParams queryParams;
    public ListImagePipelinesRequest withQueryParams(ListImagePipelinesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListImagePipelinesHeaders headers;
    public ListImagePipelinesRequest withHeaders(ListImagePipelinesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListImagePipelinesRequestBody request;
    public ListImagePipelinesRequest withRequest(ListImagePipelinesRequestBody request) {
        this.request = request;
        return this;
    }
}