package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAddListenerCertificatesRequest {
    public PostAddListenerCertificatesQueryParams queryParams;
    public PostAddListenerCertificatesRequest withQueryParams(PostAddListenerCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostAddListenerCertificatesHeaders headers;
    public PostAddListenerCertificatesRequest withHeaders(PostAddListenerCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostAddListenerCertificatesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}