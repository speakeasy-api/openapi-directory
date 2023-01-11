package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeCertificateAuthorityAuditReportResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuditReportStatus")
    public AuditReportStatusEnum auditReportStatus;
    public DescribeCertificateAuthorityAuditReportResponse withAuditReportStatus(AuditReportStatusEnum auditReportStatus) {
        this.auditReportStatus = auditReportStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedAt")
    public OffsetDateTime createdAt;
    public DescribeCertificateAuthorityAuditReportResponse withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3BucketName")
    public String s3BucketName;
    public DescribeCertificateAuthorityAuditReportResponse withS3BucketName(String s3BucketName) {
        this.s3BucketName = s3BucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Key")
    public String s3Key;
    public DescribeCertificateAuthorityAuditReportResponse withS3Key(String s3Key) {
        this.s3Key = s3Key;
        return this;
    }
}