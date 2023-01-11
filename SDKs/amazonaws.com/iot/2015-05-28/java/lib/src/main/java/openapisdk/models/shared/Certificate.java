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
 * Information about a certificate.
**/
public class Certificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateArn")
    public String certificateArn;
    public Certificate withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateId")
    public String certificateId;
    public Certificate withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateMode")
    public CertificateModeEnum certificateMode;
    public Certificate withCertificateMode(CertificateModeEnum certificateMode) {
        this.certificateMode = certificateMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public Certificate withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public CertificateStatusEnum status;
    public Certificate withStatus(CertificateStatusEnum status) {
        this.status = status;
        return this;
    }
}