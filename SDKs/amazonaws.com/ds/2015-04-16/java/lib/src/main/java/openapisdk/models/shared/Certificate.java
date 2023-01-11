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
 * Information about the certificate.
**/
public class Certificate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CertificateId")
    public String certificateId;
    public Certificate withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClientCertAuthSettings")
    public ClientCertAuthSettings clientCertAuthSettings;
    public Certificate withClientCertAuthSettings(ClientCertAuthSettings clientCertAuthSettings) {
        this.clientCertAuthSettings = clientCertAuthSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CommonName")
    public String commonName;
    public Certificate withCommonName(String commonName) {
        this.commonName = commonName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("ExpiryDateTime")
    public OffsetDateTime expiryDateTime;
    public Certificate withExpiryDateTime(OffsetDateTime expiryDateTime) {
        this.expiryDateTime = expiryDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("RegisteredDateTime")
    public OffsetDateTime registeredDateTime;
    public Certificate withRegisteredDateTime(OffsetDateTime registeredDateTime) {
        this.registeredDateTime = registeredDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public CertificateStateEnum state;
    public Certificate withState(CertificateStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReason")
    public String stateReason;
    public Certificate withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public CertificateTypeEnum type;
    public Certificate withType(CertificateTypeEnum type) {
        this.type = type;
        return this;
    }
}