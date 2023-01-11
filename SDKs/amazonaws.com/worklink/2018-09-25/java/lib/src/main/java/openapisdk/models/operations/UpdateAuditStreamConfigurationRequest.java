package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAuditStreamConfigurationRequest {
    public UpdateAuditStreamConfigurationHeaders headers;
    public UpdateAuditStreamConfigurationRequest withHeaders(UpdateAuditStreamConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAuditStreamConfigurationRequestBody request;
    public UpdateAuditStreamConfigurationRequest withRequest(UpdateAuditStreamConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}