package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStatementResultRequest {
    public GetStatementResultQueryParams queryParams;
    public GetStatementResultRequest withQueryParams(GetStatementResultQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public GetStatementResultHeaders headers;
    public GetStatementResultRequest withHeaders(GetStatementResultHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetStatementResultRequest request;
    public GetStatementResultRequest withRequest(openapisdk.models.shared.GetStatementResultRequest request) {
        this.request = request;
        return this;
    }
}