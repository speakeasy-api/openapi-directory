package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchEntitiesRequest {
    public SearchEntitiesQueryParams queryParams;
    public SearchEntitiesRequest withQueryParams(SearchEntitiesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchEntitiesHeaders headers;
    public SearchEntitiesRequest withHeaders(SearchEntitiesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchEntitiesRequest request;
    public SearchEntitiesRequest withRequest(openapisdk.models.shared.SearchEntitiesRequest request) {
        this.request = request;
        return this;
    }
}