package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListImageBuildVersionsRequest {
    public ListImageBuildVersionsQueryParams queryParams;
    public ListImageBuildVersionsRequest withQueryParams(ListImageBuildVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListImageBuildVersionsHeaders headers;
    public ListImageBuildVersionsRequest withHeaders(ListImageBuildVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListImageBuildVersionsRequestBody request;
    public ListImageBuildVersionsRequest withRequest(ListImageBuildVersionsRequestBody request) {
        this.request = request;
        return this;
    }
}