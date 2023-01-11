package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLoadBalancerTlsCertificatesRequest {
    public GetLoadBalancerTlsCertificatesHeaders headers;
    public GetLoadBalancerTlsCertificatesRequest withHeaders(GetLoadBalancerTlsCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetLoadBalancerTlsCertificatesRequest request;
    public GetLoadBalancerTlsCertificatesRequest withRequest(openapisdk.models.shared.GetLoadBalancerTlsCertificatesRequest request) {
        this.request = request;
        return this;
    }
}