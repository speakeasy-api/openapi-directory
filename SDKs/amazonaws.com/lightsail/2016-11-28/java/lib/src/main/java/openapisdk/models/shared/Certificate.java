package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Certificate
 * <p>Describes the full details of an Amazon Lightsail SSL/TLS certificate.</p> <note> <p>To get a summary of a certificate, use the <code>GetCertificates</code> action and ommit <code>includeCertificateDetails</code> from your request. The response will include only the certificate Amazon Resource Name (ARN), certificate name, domain name, and tags.</p> </note>
**/
public class Certificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public Certificate withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Certificate withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;
    public Certificate withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainValidationRecords")
    public DomainValidationRecord[] domainValidationRecords;
    public Certificate withDomainValidationRecords(DomainValidationRecord[] domainValidationRecords) {
        this.domainValidationRecords = domainValidationRecords;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eligibleToRenew")
    public String eligibleToRenew;
    public Certificate withEligibleToRenew(String eligibleToRenew) {
        this.eligibleToRenew = eligibleToRenew;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inUseResourceCount")
    public Long inUseResourceCount;
    public Certificate withInUseResourceCount(Long inUseResourceCount) {
        this.inUseResourceCount = inUseResourceCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("issuedAt")
    public OffsetDateTime issuedAt;
    public Certificate withIssuedAt(OffsetDateTime issuedAt) {
        this.issuedAt = issuedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuerCA")
    public String issuerCA;
    public Certificate withIssuerCa(String issuerCA) {
        this.issuerCA = issuerCA;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyAlgorithm")
    public String keyAlgorithm;
    public Certificate withKeyAlgorithm(String keyAlgorithm) {
        this.keyAlgorithm = keyAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Certificate withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("notAfter")
    public OffsetDateTime notAfter;
    public Certificate withNotAfter(OffsetDateTime notAfter) {
        this.notAfter = notAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("notBefore")
    public OffsetDateTime notBefore;
    public Certificate withNotBefore(OffsetDateTime notBefore) {
        this.notBefore = notBefore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSummary")
    public RenewalSummary renewalSummary;
    public Certificate withRenewalSummary(RenewalSummary renewalSummary) {
        this.renewalSummary = renewalSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestFailureReason")
    public String requestFailureReason;
    public Certificate withRequestFailureReason(String requestFailureReason) {
        this.requestFailureReason = requestFailureReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revocationReason")
    public String revocationReason;
    public Certificate withRevocationReason(String revocationReason) {
        this.revocationReason = revocationReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("revokedAt")
    public OffsetDateTime revokedAt;
    public Certificate withRevokedAt(OffsetDateTime revokedAt) {
        this.revokedAt = revokedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serialNumber")
    public String serialNumber;
    public Certificate withSerialNumber(String serialNumber) {
        this.serialNumber = serialNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CertificateStatusEnum status;
    public Certificate withStatus(CertificateStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectAlternativeNames")
    public String[] subjectAlternativeNames;
    public Certificate withSubjectAlternativeNames(String[] subjectAlternativeNames) {
        this.subjectAlternativeNames = subjectAlternativeNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportCode")
    public String supportCode;
    public Certificate withSupportCode(String supportCode) {
        this.supportCode = supportCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public Certificate withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}