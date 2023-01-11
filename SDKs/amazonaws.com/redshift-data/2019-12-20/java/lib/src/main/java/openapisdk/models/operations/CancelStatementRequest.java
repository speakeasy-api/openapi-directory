package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelStatementRequest {
    public CancelStatementHeaders headers;
    public CancelStatementRequest withHeaders(CancelStatementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CancelStatementRequest request;
    public CancelStatementRequest withRequest(openapisdk.models.shared.CancelStatementRequest request) {
        this.request = request;
        return this;
    }
}