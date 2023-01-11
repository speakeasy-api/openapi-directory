package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAppValidationConfigurationRequest {
    public PutAppValidationConfigurationHeaders headers;
    public PutAppValidationConfigurationRequest withHeaders(PutAppValidationConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutAppValidationConfigurationRequest request;
    public PutAppValidationConfigurationRequest withRequest(openapisdk.models.shared.PutAppValidationConfigurationRequest request) {
        this.request = request;
        return this;
    }
}