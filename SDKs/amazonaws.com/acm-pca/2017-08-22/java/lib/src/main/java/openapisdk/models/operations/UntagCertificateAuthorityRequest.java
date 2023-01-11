package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UntagCertificateAuthorityRequest {
    public UntagCertificateAuthorityHeaders headers;
    public UntagCertificateAuthorityRequest withHeaders(UntagCertificateAuthorityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UntagCertificateAuthorityRequest request;
    public UntagCertificateAuthorityRequest withRequest(openapisdk.models.shared.UntagCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
}