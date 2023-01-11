package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SseConfiguration
 *  The server-side encryption key configuration for a customer provided encryption key. 
**/
public class SseConfiguration {
    @JsonProperty("KmsEncryptionConfig")
    public KmsEncryptionConfig kmsEncryptionConfig;
    public SseConfiguration withKmsEncryptionConfig(KmsEncryptionConfig kmsEncryptionConfig) {
        this.kmsEncryptionConfig = kmsEncryptionConfig;
        return this;
    }
}