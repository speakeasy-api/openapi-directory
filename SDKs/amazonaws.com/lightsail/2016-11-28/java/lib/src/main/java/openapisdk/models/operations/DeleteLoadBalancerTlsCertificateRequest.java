package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLoadBalancerTlsCertificateRequest {
    public DeleteLoadBalancerTlsCertificateHeaders headers;
    public DeleteLoadBalancerTlsCertificateRequest withHeaders(DeleteLoadBalancerTlsCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DeleteLoadBalancerTlsCertificateRequest request;
    public DeleteLoadBalancerTlsCertificateRequest withRequest(openapisdk.models.shared.DeleteLoadBalancerTlsCertificateRequest request) {
        this.request = request;
        return this;
    }
}