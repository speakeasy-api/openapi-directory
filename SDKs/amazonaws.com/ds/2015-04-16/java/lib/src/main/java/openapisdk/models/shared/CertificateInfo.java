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
 * CertificateInfo
 * Contains general information about a certificate.
**/
public class CertificateInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateId")
    public String certificateId;
    public CertificateInfo withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CommonName")
    public String commonName;
    public CertificateInfo withCommonName(String commonName) {
        this.commonName = commonName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpiryDateTime")
    public OffsetDateTime expiryDateTime;
    public CertificateInfo withExpiryDateTime(OffsetDateTime expiryDateTime) {
        this.expiryDateTime = expiryDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public CertificateStateEnum state;
    public CertificateInfo withState(CertificateStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public CertificateTypeEnum type;
    public CertificateInfo withType(CertificateTypeEnum type) {
        this.type = type;
        return this;
    }
}