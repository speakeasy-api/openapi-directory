package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListDirectoriesRequest {
    public ListDirectoriesQueryParams queryParams;
    public ListDirectoriesRequest withQueryParams(ListDirectoriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListDirectoriesHeaders headers;
    public ListDirectoriesRequest withHeaders(ListDirectoriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListDirectoriesRequestBody request;
    public ListDirectoriesRequest withRequest(ListDirectoriesRequestBody request) {
        this.request = request;
        return this;
    }
}