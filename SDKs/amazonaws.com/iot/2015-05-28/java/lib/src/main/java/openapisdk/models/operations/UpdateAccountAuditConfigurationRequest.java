package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAccountAuditConfigurationRequest {
    public UpdateAccountAuditConfigurationHeaders headers;
    public UpdateAccountAuditConfigurationRequest withHeaders(UpdateAccountAuditConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateAccountAuditConfigurationRequestBody request;
    public UpdateAccountAuditConfigurationRequest withRequest(UpdateAccountAuditConfigurationRequestBody request) {
        this.request = request;
        return this;
    }
}