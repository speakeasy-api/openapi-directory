package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterElasticIpRequest {
    public RegisterElasticIpHeaders headers;
    public RegisterElasticIpRequest withHeaders(RegisterElasticIpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RegisterElasticIpRequest request;
    public RegisterElasticIpRequest withRequest(openapisdk.models.shared.RegisterElasticIpRequest request) {
        this.request = request;
        return this;
    }
}