package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeCertificateAuthorityAuditReportRequest {
    @JsonProperty("AuditReportId")
    public String auditReportId;
    public DescribeCertificateAuthorityAuditReportRequest withAuditReportId(String auditReportId) {
        this.auditReportId = auditReportId;
        return this;
    }
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public DescribeCertificateAuthorityAuditReportRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
}