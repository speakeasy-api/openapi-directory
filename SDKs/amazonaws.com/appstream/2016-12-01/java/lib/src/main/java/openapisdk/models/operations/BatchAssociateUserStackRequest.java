package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchAssociateUserStackRequest {
    public BatchAssociateUserStackHeaders headers;
    public BatchAssociateUserStackRequest withHeaders(BatchAssociateUserStackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.BatchAssociateUserStackRequest request;
    public BatchAssociateUserStackRequest withRequest(openapisdk.models.shared.BatchAssociateUserStackRequest request) {
        this.request = request;
        return this;
    }
}