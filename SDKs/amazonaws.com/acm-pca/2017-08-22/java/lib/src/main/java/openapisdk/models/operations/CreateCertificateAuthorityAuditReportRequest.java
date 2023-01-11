package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCertificateAuthorityAuditReportRequest {
    public CreateCertificateAuthorityAuditReportHeaders headers;
    public CreateCertificateAuthorityAuditReportRequest withHeaders(CreateCertificateAuthorityAuditReportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateCertificateAuthorityAuditReportRequest request;
    public CreateCertificateAuthorityAuditReportRequest withRequest(openapisdk.models.shared.CreateCertificateAuthorityAuditReportRequest request) {
        this.request = request;
        return this;
    }
}