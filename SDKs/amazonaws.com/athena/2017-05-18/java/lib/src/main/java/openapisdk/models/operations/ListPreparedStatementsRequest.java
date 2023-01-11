package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListPreparedStatementsRequest {
    public ListPreparedStatementsQueryParams queryParams;
    public ListPreparedStatementsRequest withQueryParams(ListPreparedStatementsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListPreparedStatementsHeaders headers;
    public ListPreparedStatementsRequest withHeaders(ListPreparedStatementsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListPreparedStatementsInput request;
    public ListPreparedStatementsRequest withRequest(openapisdk.models.shared.ListPreparedStatementsInput request) {
        this.request = request;
        return this;
    }
}