package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateElasticIpRequest {
    public UpdateElasticIpHeaders headers;
    public UpdateElasticIpRequest withHeaders(UpdateElasticIpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateElasticIpRequest request;
    public UpdateElasticIpRequest withRequest(openapisdk.models.shared.UpdateElasticIpRequest request) {
        this.request = request;
        return this;
    }
}