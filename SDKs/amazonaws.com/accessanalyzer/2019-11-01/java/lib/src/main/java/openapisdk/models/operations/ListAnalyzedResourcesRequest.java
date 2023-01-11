package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAnalyzedResourcesRequest {
    public ListAnalyzedResourcesQueryParams queryParams;
    public ListAnalyzedResourcesRequest withQueryParams(ListAnalyzedResourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAnalyzedResourcesHeaders headers;
    public ListAnalyzedResourcesRequest withHeaders(ListAnalyzedResourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListAnalyzedResourcesRequestBody request;
    public ListAnalyzedResourcesRequest withRequest(ListAnalyzedResourcesRequestBody request) {
        this.request = request;
        return this;
    }
}