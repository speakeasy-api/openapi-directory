/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

/**
 * LoadBalancerTlsCertificate - &lt;p&gt;Describes a load balancer SSL/TLS certificate.&lt;/p&gt; &lt;p&gt;TLS is just an updated, more secure version of Secure Socket Layer (SSL).&lt;/p&gt;
 */
public class LoadBalancerTlsCertificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;

    public LoadBalancerTlsCertificate withArn(String arn) {
        this.arn = arn;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;

    public LoadBalancerTlsCertificate withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainName")
    public String domainName;

    public LoadBalancerTlsCertificate withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domainValidationRecords")
    public LoadBalancerTlsCertificateDomainValidationRecord[] domainValidationRecords;

    public LoadBalancerTlsCertificate withDomainValidationRecords(LoadBalancerTlsCertificateDomainValidationRecord[] domainValidationRecords) {
        this.domainValidationRecords = domainValidationRecords;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureReason")
    public LoadBalancerTlsCertificateFailureReasonEnum failureReason;

    public LoadBalancerTlsCertificate withFailureReason(LoadBalancerTlsCertificateFailureReasonEnum failureReason) {
        this.failureReason = failureReason;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isAttached")
    public Boolean isAttached;

    public LoadBalancerTlsCertificate withIsAttached(Boolean isAttached) {
        this.isAttached = isAttached;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("issuedAt")
    public OffsetDateTime issuedAt;

    public LoadBalancerTlsCertificate withIssuedAt(OffsetDateTime issuedAt) {
        this.issuedAt = issuedAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("issuer")
    public String issuer;

    public LoadBalancerTlsCertificate withIssuer(String issuer) {
        this.issuer = issuer;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyAlgorithm")
    public String keyAlgorithm;

    public LoadBalancerTlsCertificate withKeyAlgorithm(String keyAlgorithm) {
        this.keyAlgorithm = keyAlgorithm;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loadBalancerName")
    public String loadBalancerName;

    public LoadBalancerTlsCertificate withLoadBalancerName(String loadBalancerName) {
        this.loadBalancerName = loadBalancerName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public ResourceLocation location;

    public LoadBalancerTlsCertificate withLocation(ResourceLocation location) {
        this.location = location;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;

    public LoadBalancerTlsCertificate withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("notAfter")
    public OffsetDateTime notAfter;

    public LoadBalancerTlsCertificate withNotAfter(OffsetDateTime notAfter) {
        this.notAfter = notAfter;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("notBefore")
    public OffsetDateTime notBefore;

    public LoadBalancerTlsCertificate withNotBefore(OffsetDateTime notBefore) {
        this.notBefore = notBefore;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("renewalSummary")
    public LoadBalancerTlsCertificateRenewalSummary renewalSummary;

    public LoadBalancerTlsCertificate withRenewalSummary(LoadBalancerTlsCertificateRenewalSummary renewalSummary) {
        this.renewalSummary = renewalSummary;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;

    public LoadBalancerTlsCertificate withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revocationReason")
    public LoadBalancerTlsCertificateRevocationReasonEnum revocationReason;

    public LoadBalancerTlsCertificate withRevocationReason(LoadBalancerTlsCertificateRevocationReasonEnum revocationReason) {
        this.revocationReason = revocationReason;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("revokedAt")
    public OffsetDateTime revokedAt;

    public LoadBalancerTlsCertificate withRevokedAt(OffsetDateTime revokedAt) {
        this.revokedAt = revokedAt;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serial")
    public String serial;

    public LoadBalancerTlsCertificate withSerial(String serial) {
        this.serial = serial;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("signatureAlgorithm")
    public String signatureAlgorithm;

    public LoadBalancerTlsCertificate withSignatureAlgorithm(String signatureAlgorithm) {
        this.signatureAlgorithm = signatureAlgorithm;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public LoadBalancerTlsCertificateStatusEnum status;

    public LoadBalancerTlsCertificate withStatus(LoadBalancerTlsCertificateStatusEnum status) {
        this.status = status;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subject")
    public String subject;

    public LoadBalancerTlsCertificate withSubject(String subject) {
        this.subject = subject;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subjectAlternativeNames")
    public String[] subjectAlternativeNames;

    public LoadBalancerTlsCertificate withSubjectAlternativeNames(String[] subjectAlternativeNames) {
        this.subjectAlternativeNames = subjectAlternativeNames;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportCode")
    public String supportCode;

    public LoadBalancerTlsCertificate withSupportCode(String supportCode) {
        this.supportCode = supportCode;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;

    public LoadBalancerTlsCertificate withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    
    public LoadBalancerTlsCertificate(){}
}
