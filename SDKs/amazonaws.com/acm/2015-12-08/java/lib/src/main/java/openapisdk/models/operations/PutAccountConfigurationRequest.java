package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutAccountConfigurationRequest {
    public PutAccountConfigurationHeaders headers;
    public PutAccountConfigurationRequest withHeaders(PutAccountConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.PutAccountConfigurationRequest request;
    public PutAccountConfigurationRequest withRequest(openapisdk.models.shared.PutAccountConfigurationRequest request) {
        this.request = request;
        return this;
    }
}