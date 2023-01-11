package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLoadBalancerTlsCertificateRequest {
    public CreateLoadBalancerTlsCertificateHeaders headers;
    public CreateLoadBalancerTlsCertificateRequest withHeaders(CreateLoadBalancerTlsCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateLoadBalancerTlsCertificateRequest request;
    public CreateLoadBalancerTlsCertificateRequest withRequest(openapisdk.models.shared.CreateLoadBalancerTlsCertificateRequest request) {
        this.request = request;
        return this;
    }
}