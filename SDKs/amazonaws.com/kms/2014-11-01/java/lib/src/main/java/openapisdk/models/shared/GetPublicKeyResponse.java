package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPublicKeyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerMasterKeySpec")
    public java.util.Map<String, Object> customerMasterKeySpec;
    public GetPublicKeyResponse withCustomerMasterKeySpec(java.util.Map<String, Object> customerMasterKeySpec) {
        this.customerMasterKeySpec = customerMasterKeySpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionAlgorithms")
    public EncryptionAlgorithmSpecEnum[] encryptionAlgorithms;
    public GetPublicKeyResponse withEncryptionAlgorithms(EncryptionAlgorithmSpecEnum[] encryptionAlgorithms) {
        this.encryptionAlgorithms = encryptionAlgorithms;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyId")
    public String keyId;
    public GetPublicKeyResponse withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeySpec")
    public KeySpecEnum keySpec;
    public GetPublicKeyResponse withKeySpec(KeySpecEnum keySpec) {
        this.keySpec = keySpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyUsage")
    public KeyUsageTypeEnum keyUsage;
    public GetPublicKeyResponse withKeyUsage(KeyUsageTypeEnum keyUsage) {
        this.keyUsage = keyUsage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicKey")
    public String publicKey;
    public GetPublicKeyResponse withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SigningAlgorithms")
    public SigningAlgorithmSpecEnum[] signingAlgorithms;
    public GetPublicKeyResponse withSigningAlgorithms(SigningAlgorithmSpecEnum[] signingAlgorithms) {
        this.signingAlgorithms = signingAlgorithms;
        return this;
    }
}