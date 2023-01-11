package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListObjectParentsRequest {
    public ListObjectParentsQueryParams queryParams;
    public ListObjectParentsRequest withQueryParams(ListObjectParentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListObjectParentsHeaders headers;
    public ListObjectParentsRequest withHeaders(ListObjectParentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListObjectParentsRequestBody request;
    public ListObjectParentsRequest withRequest(ListObjectParentsRequestBody request) {
        this.request = request;
        return this;
    }
}