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
 * The SSL certificate that can be used to encrypt connections between the endpoints and the replication instance.
**/
public class Certificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public Certificate withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CertificateCreationDate")
    public OffsetDateTime certificateCreationDate;
    public Certificate withCertificateCreationDate(OffsetDateTime certificateCreationDate) {
        this.certificateCreationDate = certificateCreationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateIdentifier")
    public String certificateIdentifier;
    public Certificate withCertificateIdentifier(String certificateIdentifier) {
        this.certificateIdentifier = certificateIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateOwner")
    public String certificateOwner;
    public Certificate withCertificateOwner(String certificateOwner) {
        this.certificateOwner = certificateOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificatePem")
    public String certificatePem;
    public Certificate withCertificatePem(String certificatePem) {
        this.certificatePem = certificatePem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateWallet")
    public String certificateWallet;
    public Certificate withCertificateWallet(String certificateWallet) {
        this.certificateWallet = certificateWallet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyLength")
    public Long keyLength;
    public Certificate withKeyLength(Long keyLength) {
        this.keyLength = keyLength;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningAlgorithm")
    public String signingAlgorithm;
    public Certificate withSigningAlgorithm(String signingAlgorithm) {
        this.signingAlgorithm = signingAlgorithm;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ValidFromDate")
    public OffsetDateTime validFromDate;
    public Certificate withValidFromDate(OffsetDateTime validFromDate) {
        this.validFromDate = validFromDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ValidToDate")
    public OffsetDateTime validToDate;
    public Certificate withValidToDate(OffsetDateTime validToDate) {
        this.validToDate = validToDate;
        return this;
    }
}