package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStoredQueriesRequest {
    public ListStoredQueriesQueryParams queryParams;
    public ListStoredQueriesRequest withQueryParams(ListStoredQueriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListStoredQueriesHeaders headers;
    public ListStoredQueriesRequest withHeaders(ListStoredQueriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListStoredQueriesRequest request;
    public ListStoredQueriesRequest withRequest(openapisdk.models.shared.ListStoredQueriesRequest request) {
        this.request = request;
        return this;
    }
}