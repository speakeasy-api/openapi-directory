package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCertificateAuthorityAuditReportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuditReportId")
    public String auditReportId;
    public CreateCertificateAuthorityAuditReportResponse withAuditReportId(String auditReportId) {
        this.auditReportId = auditReportId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Key")
    public String s3Key;
    public CreateCertificateAuthorityAuditReportResponse withS3Key(String s3Key) {
        this.s3Key = s3Key;
        return this;
    }
}