package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAuditSuppressionRequest {
    public DeleteAuditSuppressionHeaders headers;
    public DeleteAuditSuppressionRequest withHeaders(DeleteAuditSuppressionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteAuditSuppressionRequestBody request;
    public DeleteAuditSuppressionRequest withRequest(DeleteAuditSuppressionRequestBody request) {
        this.request = request;
        return this;
    }
}