package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteSecurityConfigurationRequest {
    public DeleteSecurityConfigurationHeaders headers;
    public DeleteSecurityConfigurationRequest withHeaders(DeleteSecurityConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteSecurityConfigurationRequest request;
    public DeleteSecurityConfigurationRequest withRequest(openapisdk.models.shared.DeleteSecurityConfigurationRequest request) {
        this.request = request;
        return this;
    }
}