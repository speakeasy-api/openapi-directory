package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SearchGameSessionsRequest {
    public SearchGameSessionsQueryParams queryParams;
    public SearchGameSessionsRequest withQueryParams(SearchGameSessionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public SearchGameSessionsHeaders headers;
    public SearchGameSessionsRequest withHeaders(SearchGameSessionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.SearchGameSessionsInput request;
    public SearchGameSessionsRequest withRequest(openapisdk.models.shared.SearchGameSessionsInput request) {
        this.request = request;
        return this;
    }
}