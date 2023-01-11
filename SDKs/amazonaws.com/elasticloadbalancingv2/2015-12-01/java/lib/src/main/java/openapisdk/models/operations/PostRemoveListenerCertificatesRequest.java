package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRemoveListenerCertificatesRequest {
    public PostRemoveListenerCertificatesQueryParams queryParams;
    public PostRemoveListenerCertificatesRequest withQueryParams(PostRemoveListenerCertificatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRemoveListenerCertificatesHeaders headers;
    public PostRemoveListenerCertificatesRequest withHeaders(PostRemoveListenerCertificatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRemoveListenerCertificatesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}