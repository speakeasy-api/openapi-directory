package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeregisterElasticIpRequest {
    public DeregisterElasticIpHeaders headers;
    public DeregisterElasticIpRequest withHeaders(DeregisterElasticIpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeregisterElasticIpRequest request;
    public DeregisterElasticIpRequest withRequest(openapisdk.models.shared.DeregisterElasticIpRequest request) {
        this.request = request;
        return this;
    }
}