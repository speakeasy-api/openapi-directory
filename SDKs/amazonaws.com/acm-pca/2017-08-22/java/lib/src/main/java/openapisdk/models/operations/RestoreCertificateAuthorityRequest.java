package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RestoreCertificateAuthorityRequest {
    public RestoreCertificateAuthorityHeaders headers;
    public RestoreCertificateAuthorityRequest withHeaders(RestoreCertificateAuthorityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RestoreCertificateAuthorityRequest request;
    public RestoreCertificateAuthorityRequest withRequest(openapisdk.models.shared.RestoreCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
}