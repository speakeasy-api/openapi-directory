package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTableRowsRequest {
    public ListTableRowsPathParams pathParams;
    public ListTableRowsRequest withPathParams(ListTableRowsPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public ListTableRowsQueryParams queryParams;
    public ListTableRowsRequest withQueryParams(ListTableRowsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTableRowsHeaders headers;
    public ListTableRowsRequest withHeaders(ListTableRowsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ListTableRowsRequestBody request;
    public ListTableRowsRequest withRequest(ListTableRowsRequestBody request) {
        this.request = request;
        return this;
    }
}