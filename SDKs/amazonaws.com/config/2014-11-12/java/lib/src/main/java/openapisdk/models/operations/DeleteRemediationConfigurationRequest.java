package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRemediationConfigurationRequest {
    public DeleteRemediationConfigurationHeaders headers;
    public DeleteRemediationConfigurationRequest withHeaders(DeleteRemediationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteRemediationConfigurationRequest request;
    public DeleteRemediationConfigurationRequest withRequest(openapisdk.models.shared.DeleteRemediationConfigurationRequest request) {
        this.request = request;
        return this;
    }
}