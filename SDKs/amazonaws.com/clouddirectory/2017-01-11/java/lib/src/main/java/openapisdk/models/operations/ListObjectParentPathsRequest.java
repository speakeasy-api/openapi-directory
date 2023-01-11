package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListObjectParentPathsRequest {
    public ListObjectParentPathsQueryParams queryParams;
    public ListObjectParentPathsRequest withQueryParams(ListObjectParentPathsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListObjectParentPathsHeaders headers;
    public ListObjectParentPathsRequest withHeaders(ListObjectParentPathsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListObjectParentPathsRequestBody request;
    public ListObjectParentPathsRequest withRequest(ListObjectParentPathsRequestBody request) {
        this.request = request;
        return this;
    }
}