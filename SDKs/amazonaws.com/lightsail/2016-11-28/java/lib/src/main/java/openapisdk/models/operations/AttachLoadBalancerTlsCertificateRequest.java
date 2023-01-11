package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AttachLoadBalancerTlsCertificateRequest {
    public AttachLoadBalancerTlsCertificateHeaders headers;
    public AttachLoadBalancerTlsCertificateRequest withHeaders(AttachLoadBalancerTlsCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AttachLoadBalancerTlsCertificateRequest request;
    public AttachLoadBalancerTlsCertificateRequest withRequest(openapisdk.models.shared.AttachLoadBalancerTlsCertificateRequest request) {
        this.request = request;
        return this;
    }
}