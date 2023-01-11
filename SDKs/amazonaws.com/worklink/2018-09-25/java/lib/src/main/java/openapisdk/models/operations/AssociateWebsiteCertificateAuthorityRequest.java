package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateWebsiteCertificateAuthorityRequest {
    public AssociateWebsiteCertificateAuthorityHeaders headers;
    public AssociateWebsiteCertificateAuthorityRequest withHeaders(AssociateWebsiteCertificateAuthorityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AssociateWebsiteCertificateAuthorityRequestBody request;
    public AssociateWebsiteCertificateAuthorityRequest withRequest(AssociateWebsiteCertificateAuthorityRequestBody request) {
        this.request = request;
        return this;
    }
}