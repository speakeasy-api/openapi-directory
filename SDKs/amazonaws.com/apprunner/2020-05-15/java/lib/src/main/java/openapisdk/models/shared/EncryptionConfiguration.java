package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EncryptionConfiguration
 * Describes a custom encryption key that AWS App Runner uses to encrypt copies of the source repository and service logs.
**/
public class EncryptionConfiguration {
    @JsonProperty("KmsKey")
    public String kmsKey;
    public EncryptionConfiguration withKmsKey(String kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
}