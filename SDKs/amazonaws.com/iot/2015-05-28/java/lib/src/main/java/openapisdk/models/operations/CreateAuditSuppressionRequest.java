package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAuditSuppressionRequest {
    public CreateAuditSuppressionHeaders headers;
    public CreateAuditSuppressionRequest withHeaders(CreateAuditSuppressionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateAuditSuppressionRequestBody request;
    public CreateAuditSuppressionRequest withRequest(CreateAuditSuppressionRequestBody request) {
        this.request = request;
        return this;
    }
}