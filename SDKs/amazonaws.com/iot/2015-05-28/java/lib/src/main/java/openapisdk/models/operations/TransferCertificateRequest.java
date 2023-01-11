package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransferCertificateRequest {
    public TransferCertificatePathParams pathParams;
    public TransferCertificateRequest withPathParams(TransferCertificatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public TransferCertificateQueryParams queryParams;
    public TransferCertificateRequest withQueryParams(TransferCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public TransferCertificateHeaders headers;
    public TransferCertificateRequest withHeaders(TransferCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public TransferCertificateRequestBody request;
    public TransferCertificateRequest withRequest(TransferCertificateRequestBody request) {
        this.request = request;
        return this;
    }
}