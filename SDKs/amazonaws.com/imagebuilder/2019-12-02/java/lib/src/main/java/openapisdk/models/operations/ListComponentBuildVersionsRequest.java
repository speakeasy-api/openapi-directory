package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListComponentBuildVersionsRequest {
    public ListComponentBuildVersionsQueryParams queryParams;
    public ListComponentBuildVersionsRequest withQueryParams(ListComponentBuildVersionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListComponentBuildVersionsHeaders headers;
    public ListComponentBuildVersionsRequest withHeaders(ListComponentBuildVersionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListComponentBuildVersionsRequestBody request;
    public ListComponentBuildVersionsRequest withRequest(ListComponentBuildVersionsRequestBody request) {
        this.request = request;
        return this;
    }
}