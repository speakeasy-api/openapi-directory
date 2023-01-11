package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeCertificateAuthorityAuditReportRequest {
    public DescribeCertificateAuthorityAuditReportHeaders headers;
    public DescribeCertificateAuthorityAuditReportRequest withHeaders(DescribeCertificateAuthorityAuditReportHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeCertificateAuthorityAuditReportRequest request;
    public DescribeCertificateAuthorityAuditReportRequest withRequest(openapisdk.models.shared.DescribeCertificateAuthorityAuditReportRequest request) {
        this.request = request;
        return this;
    }
}