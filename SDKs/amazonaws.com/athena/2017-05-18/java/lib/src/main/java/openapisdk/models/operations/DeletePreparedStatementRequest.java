package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePreparedStatementRequest {
    public DeletePreparedStatementHeaders headers;
    public DeletePreparedStatementRequest withHeaders(DeletePreparedStatementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeletePreparedStatementInput request;
    public DeletePreparedStatementRequest withRequest(openapisdk.models.shared.DeletePreparedStatementInput request) {
        this.request = request;
        return this;
    }
}