package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTablesRequest {
    public GetTablesQueryParams queryParams;
    public GetTablesRequest withQueryParams(GetTablesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetTablesHeaders headers;
    public GetTablesRequest withHeaders(GetTablesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTablesRequest request;
    public GetTablesRequest withRequest(openapisdk.models.shared.GetTablesRequest request) {
        this.request = request;
        return this;
    }
}