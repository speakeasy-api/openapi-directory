package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchDisassociateUserStackRequest {
    public BatchDisassociateUserStackHeaders headers;
    public BatchDisassociateUserStackRequest withHeaders(BatchDisassociateUserStackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchDisassociateUserStackRequest request;
    public BatchDisassociateUserStackRequest withRequest(openapisdk.models.shared.BatchDisassociateUserStackRequest request) {
        this.request = request;
        return this;
    }
}