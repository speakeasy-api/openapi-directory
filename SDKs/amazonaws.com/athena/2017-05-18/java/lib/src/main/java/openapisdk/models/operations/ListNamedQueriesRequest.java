package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNamedQueriesRequest {
    public ListNamedQueriesQueryParams queryParams;
    public ListNamedQueriesRequest withQueryParams(ListNamedQueriesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListNamedQueriesHeaders headers;
    public ListNamedQueriesRequest withHeaders(ListNamedQueriesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListNamedQueriesInput request;
    public ListNamedQueriesRequest withRequest(openapisdk.models.shared.ListNamedQueriesInput request) {
        this.request = request;
        return this;
    }
}