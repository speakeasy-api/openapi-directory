package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class CreateProvisioningClaimResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificateId")
    public String certificateId;
    public CreateProvisioningClaimResponse withCertificateId(String certificateId) {
        this.certificateId = certificateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("certificatePem")
    public String certificatePem;
    public CreateProvisioningClaimResponse withCertificatePem(String certificatePem) {
        this.certificatePem = certificatePem;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expiration")
    public OffsetDateTime expiration;
    public CreateProvisioningClaimResponse withExpiration(OffsetDateTime expiration) {
        this.expiration = expiration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPair")
    public KeyPair keyPair;
    public CreateProvisioningClaimResponse withKeyPair(KeyPair keyPair) {
        this.keyPair = keyPair;
        return this;
    }
}