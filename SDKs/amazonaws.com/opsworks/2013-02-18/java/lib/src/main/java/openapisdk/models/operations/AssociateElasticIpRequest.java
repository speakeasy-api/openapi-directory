package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateElasticIpRequest {
    public AssociateElasticIpHeaders headers;
    public AssociateElasticIpRequest withHeaders(AssociateElasticIpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateElasticIpRequest request;
    public AssociateElasticIpRequest withRequest(openapisdk.models.shared.AssociateElasticIpRequest request) {
        this.request = request;
        return this;
    }
}