package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ExecuteStatementRequest {
    public ExecuteStatementHeaders headers;
    public ExecuteStatementRequest withHeaders(ExecuteStatementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ExecuteStatementInput request;
    public ExecuteStatementRequest withRequest(openapisdk.models.shared.ExecuteStatementInput request) {
        this.request = request;
        return this;
    }
}