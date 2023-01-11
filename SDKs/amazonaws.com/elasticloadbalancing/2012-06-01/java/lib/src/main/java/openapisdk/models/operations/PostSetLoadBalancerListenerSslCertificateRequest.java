package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetLoadBalancerListenerSslCertificateRequest {
    public PostSetLoadBalancerListenerSslCertificateQueryParams queryParams;
    public PostSetLoadBalancerListenerSslCertificateRequest withQueryParams(PostSetLoadBalancerListenerSslCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSetLoadBalancerListenerSslCertificateHeaders headers;
    public PostSetLoadBalancerListenerSslCertificateRequest withHeaders(PostSetLoadBalancerListenerSslCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSetLoadBalancerListenerSslCertificateRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}