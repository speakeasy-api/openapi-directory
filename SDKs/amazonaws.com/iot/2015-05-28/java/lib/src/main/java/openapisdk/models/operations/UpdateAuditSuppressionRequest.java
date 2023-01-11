package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAuditSuppressionRequest {
    public UpdateAuditSuppressionHeaders headers;
    public UpdateAuditSuppressionRequest withHeaders(UpdateAuditSuppressionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAuditSuppressionRequestBody request;
    public UpdateAuditSuppressionRequest withRequest(UpdateAuditSuppressionRequestBody request) {
        this.request = request;
        return this;
    }
}