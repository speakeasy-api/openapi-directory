package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTablesRequest {
    public ListTablesQueryParams queryParams;
    public ListTablesRequest withQueryParams(ListTablesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListTablesHeaders headers;
    public ListTablesRequest withHeaders(ListTablesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListTablesInput request;
    public ListTablesRequest withRequest(openapisdk.models.shared.ListTablesInput request) {
        this.request = request;
        return this;
    }
}