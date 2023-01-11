package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPreparedStatementRequest {
    public GetPreparedStatementHeaders headers;
    public GetPreparedStatementRequest withHeaders(GetPreparedStatementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetPreparedStatementInput request;
    public GetPreparedStatementRequest withRequest(openapisdk.models.shared.GetPreparedStatementInput request) {
        this.request = request;
        return this;
    }
}