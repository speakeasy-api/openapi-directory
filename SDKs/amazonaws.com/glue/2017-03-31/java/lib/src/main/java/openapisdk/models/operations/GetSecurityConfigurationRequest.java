package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSecurityConfigurationRequest {
    public GetSecurityConfigurationHeaders headers;
    public GetSecurityConfigurationRequest withHeaders(GetSecurityConfigurationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetSecurityConfigurationRequest request;
    public GetSecurityConfigurationRequest withRequest(openapisdk.models.shared.GetSecurityConfigurationRequest request) {
        this.request = request;
        return this;
    }
}