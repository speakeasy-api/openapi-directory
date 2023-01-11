package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartOnDemandAuditTaskRequest {
    public StartOnDemandAuditTaskHeaders headers;
    public StartOnDemandAuditTaskRequest withHeaders(StartOnDemandAuditTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public StartOnDemandAuditTaskRequestBody request;
    public StartOnDemandAuditTaskRequest withRequest(StartOnDemandAuditTaskRequestBody request) {
        this.request = request;
        return this;
    }
}