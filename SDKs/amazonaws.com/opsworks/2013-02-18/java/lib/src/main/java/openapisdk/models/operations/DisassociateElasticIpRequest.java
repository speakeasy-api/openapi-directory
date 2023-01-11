package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateElasticIpRequest {
    public DisassociateElasticIpHeaders headers;
    public DisassociateElasticIpRequest withHeaders(DisassociateElasticIpHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateElasticIpRequest request;
    public DisassociateElasticIpRequest withRequest(openapisdk.models.shared.DisassociateElasticIpRequest request) {
        this.request = request;
        return this;
    }
}