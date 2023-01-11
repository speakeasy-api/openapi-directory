package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TagCertificateAuthorityRequest {
    public TagCertificateAuthorityHeaders headers;
    public TagCertificateAuthorityRequest withHeaders(TagCertificateAuthorityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.TagCertificateAuthorityRequest request;
    public TagCertificateAuthorityRequest withRequest(openapisdk.models.shared.TagCertificateAuthorityRequest request) {
        this.request = request;
        return this;
    }
}