package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePreparedStatementRequest {
    public UpdatePreparedStatementHeaders headers;
    public UpdatePreparedStatementRequest withHeaders(UpdatePreparedStatementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdatePreparedStatementInput request;
    public UpdatePreparedStatementRequest withRequest(openapisdk.models.shared.UpdatePreparedStatementInput request) {
        this.request = request;
        return this;
    }
}