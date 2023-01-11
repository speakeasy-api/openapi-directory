package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RequestCertificateRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateAuthorityArn")
    public String certificateAuthorityArn;
    public RequestCertificateRequest withCertificateAuthorityArn(String certificateAuthorityArn) {
        this.certificateAuthorityArn = certificateAuthorityArn;
        return this;
    }
    @JsonProperty("DomainName")
    public String domainName;
    public RequestCertificateRequest withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainValidationOptions")
    public DomainValidationOption[] domainValidationOptions;
    public RequestCertificateRequest withDomainValidationOptions(DomainValidationOption[] domainValidationOptions) {
        this.domainValidationOptions = domainValidationOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;
    public RequestCertificateRequest withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Options")
    public CertificateOptions options;
    public RequestCertificateRequest withOptions(CertificateOptions options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SubjectAlternativeNames")
    public String[] subjectAlternativeNames;
    public RequestCertificateRequest withSubjectAlternativeNames(String[] subjectAlternativeNames) {
        this.subjectAlternativeNames = subjectAlternativeNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public RequestCertificateRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ValidationMethod")
    public ValidationMethodEnum validationMethod;
    public RequestCertificateRequest withValidationMethod(ValidationMethodEnum validationMethod) {
        this.validationMethod = validationMethod;
        return this;
    }
}