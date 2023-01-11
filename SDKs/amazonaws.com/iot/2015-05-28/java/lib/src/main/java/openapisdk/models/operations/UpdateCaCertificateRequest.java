package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateCaCertificateRequest {
    public UpdateCaCertificatePathParams pathParams;
    public UpdateCaCertificateRequest withPathParams(UpdateCaCertificatePathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateCaCertificateQueryParams queryParams;
    public UpdateCaCertificateRequest withQueryParams(UpdateCaCertificateQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public UpdateCaCertificateHeaders headers;
    public UpdateCaCertificateRequest withHeaders(UpdateCaCertificateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateCaCertificateRequestBody request;
    public UpdateCaCertificateRequest withRequest(UpdateCaCertificateRequestBody request) {
        this.request = request;
        return this;
    }
}