package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteAppValidationConfigurationRequest {
    public DeleteAppValidationConfigurationHeaders headers;
    public DeleteAppValidationConfigurationRequest withHeaders(DeleteAppValidationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteAppValidationConfigurationRequest request;
    public DeleteAppValidationConfigurationRequest withRequest(openapisdk.models.shared.DeleteAppValidationConfigurationRequest request) {
        this.request = request;
        return this;
    }
}