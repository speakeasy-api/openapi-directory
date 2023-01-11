package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QueryTableRowsRequest {
    public QueryTableRowsPathParams pathParams;
    public QueryTableRowsRequest withPathParams(QueryTableRowsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public QueryTableRowsQueryParams queryParams;
    public QueryTableRowsRequest withQueryParams(QueryTableRowsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public QueryTableRowsHeaders headers;
    public QueryTableRowsRequest withHeaders(QueryTableRowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public QueryTableRowsRequestBody request;
    public QueryTableRowsRequest withRequest(QueryTableRowsRequestBody request) {
        this.request = request;
        return this;
    }
}