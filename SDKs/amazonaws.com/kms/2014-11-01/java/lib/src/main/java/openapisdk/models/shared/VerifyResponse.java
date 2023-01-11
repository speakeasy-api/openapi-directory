package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VerifyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public VerifyResponse withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SignatureValid")
    public Boolean signatureValid;
    public VerifyResponse withSignatureValid(Boolean signatureValid) {
        this.signatureValid = signatureValid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningAlgorithm")
    public SigningAlgorithmSpecEnum signingAlgorithm;
    public VerifyResponse withSigningAlgorithm(SigningAlgorithmSpecEnum signingAlgorithm) {
        this.signingAlgorithm = signingAlgorithm;
        return this;
    }
}