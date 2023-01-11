package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateWebsiteCertificateAuthorityRequest {
    public DisassociateWebsiteCertificateAuthorityHeaders headers;
    public DisassociateWebsiteCertificateAuthorityRequest withHeaders(DisassociateWebsiteCertificateAuthorityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DisassociateWebsiteCertificateAuthorityRequestBody request;
    public DisassociateWebsiteCertificateAuthorityRequest withRequest(DisassociateWebsiteCertificateAuthorityRequestBody request) {
        this.request = request;
        return this;
    }
}