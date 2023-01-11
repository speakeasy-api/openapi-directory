package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListStatementsRequest {
    public ListStatementsQueryParams queryParams;
    public ListStatementsRequest withQueryParams(ListStatementsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListStatementsHeaders headers;
    public ListStatementsRequest withHeaders(ListStatementsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListStatementsRequest request;
    public ListStatementsRequest withRequest(openapisdk.models.shared.ListStatementsRequest request) {
        this.request = request;
        return this;
    }
}