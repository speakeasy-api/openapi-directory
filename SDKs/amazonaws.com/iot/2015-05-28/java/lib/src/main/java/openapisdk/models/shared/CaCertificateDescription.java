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
 * CaCertificateDescription
 * Describes a CA certificate.
**/
public class CaCertificateDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("autoRegistrationStatus")
    public AutoRegistrationStatusEnum autoRegistrationStatus;
    public CaCertificateDescription withAutoRegistrationStatus(AutoRegistrationStatusEnum autoRegistrationStatus) {
        this.autoRegistrationStatus = autoRegistrationStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateArn")
    public String certificateArn;
    public CaCertificateDescription withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateId")
    public String certificateId;
    public CaCertificateDescription withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificatePem")
    public String certificatePem;
    public CaCertificateDescription withCertificatePem(String certificatePem) {
        this.certificatePem = certificatePem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public CaCertificateDescription withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerVersion")
    public Long customerVersion;
    public CaCertificateDescription withCustomerVersion(Long customerVersion) {
        this.customerVersion = customerVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("generationId")
    public String generationId;
    public CaCertificateDescription withGenerationId(String generationId) {
        this.generationId = generationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public CaCertificateDescription withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownedBy")
    public String ownedBy;
    public CaCertificateDescription withOwnedBy(String ownedBy) {
        this.ownedBy = ownedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CaCertificateStatusEnum status;
    public CaCertificateDescription withStatus(CaCertificateStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("validity")
    public CertificateValidity validity;
    public CaCertificateDescription withValidity(CertificateValidity validity) {
        this.validity = validity;
        return this;
    }
}