package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DomainNameConfiguration
 * The domain name configuration.
**/
public class DomainNameConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApiGatewayDomainName")
    public java.util.Map<String, Object> apiGatewayDomainName;
    public DomainNameConfiguration withApiGatewayDomainName(java.util.Map<String, Object> apiGatewayDomainName) {
        this.apiGatewayDomainName = apiGatewayDomainName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateArn")
    public java.util.Map<String, Object> certificateArn;
    public DomainNameConfiguration withCertificateArn(java.util.Map<String, Object> certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateName")
    public java.util.Map<String, Object> certificateName;
    public DomainNameConfiguration withCertificateName(java.util.Map<String, Object> certificateName) {
        this.certificateName = certificateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateUploadDate")
    public java.util.Map<String, Object> certificateUploadDate;
    public DomainNameConfiguration withCertificateUploadDate(java.util.Map<String, Object> certificateUploadDate) {
        this.certificateUploadDate = certificateUploadDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainNameStatus")
    public java.util.Map<String, Object> domainNameStatus;
    public DomainNameConfiguration withDomainNameStatus(java.util.Map<String, Object> domainNameStatus) {
        this.domainNameStatus = domainNameStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainNameStatusMessage")
    public java.util.Map<String, Object> domainNameStatusMessage;
    public DomainNameConfiguration withDomainNameStatusMessage(java.util.Map<String, Object> domainNameStatusMessage) {
        this.domainNameStatusMessage = domainNameStatusMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointType")
    public java.util.Map<String, Object> endpointType;
    public DomainNameConfiguration withEndpointType(java.util.Map<String, Object> endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HostedZoneId")
    public java.util.Map<String, Object> hostedZoneId;
    public DomainNameConfiguration withHostedZoneId(java.util.Map<String, Object> hostedZoneId) {
        this.hostedZoneId = hostedZoneId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OwnershipVerificationCertificateArn")
    public java.util.Map<String, Object> ownershipVerificationCertificateArn;
    public DomainNameConfiguration withOwnershipVerificationCertificateArn(java.util.Map<String, Object> ownershipVerificationCertificateArn) {
        this.ownershipVerificationCertificateArn = ownershipVerificationCertificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityPolicy")
    public java.util.Map<String, Object> securityPolicy;
    public DomainNameConfiguration withSecurityPolicy(java.util.Map<String, Object> securityPolicy) {
        this.securityPolicy = securityPolicy;
        return this;
    }
}