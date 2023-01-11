package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QueryObjectsRequest {
    public QueryObjectsQueryParams queryParams;
    public QueryObjectsRequest withQueryParams(QueryObjectsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public QueryObjectsHeaders headers;
    public QueryObjectsRequest withHeaders(QueryObjectsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.QueryObjectsInput request;
    public QueryObjectsRequest withRequest(openapisdk.models.shared.QueryObjectsInput request) {
        this.request = request;
        return this;
    }
}