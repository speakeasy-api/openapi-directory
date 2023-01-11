package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QueryRequest {
    public QueryQueryParams queryParams;
    public QueryRequest withQueryParams(QueryQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public QueryHeaders headers;
    public QueryRequest withHeaders(QueryHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryInput request;
    public QueryRequest withRequest(openapisdk.models.shared.QueryInput request) {
        this.request = request;
        return this;
    }
}