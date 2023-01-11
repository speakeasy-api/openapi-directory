package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreatePreparedStatementRequest {
    public CreatePreparedStatementHeaders headers;
    public CreatePreparedStatementRequest withHeaders(CreatePreparedStatementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreatePreparedStatementInput request;
    public CreatePreparedStatementRequest withRequest(openapisdk.models.shared.CreatePreparedStatementInput request) {
        this.request = request;
        return this;
    }
}