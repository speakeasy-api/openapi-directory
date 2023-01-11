package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EncryptionConfiguration
 * Describes the encryption for a destination in Amazon S3.
**/
public class EncryptionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSEncryptionConfig")
    public KmsEncryptionConfig kmsEncryptionConfig;
    public EncryptionConfiguration withKmsEncryptionConfig(KmsEncryptionConfig kmsEncryptionConfig) {
        this.kmsEncryptionConfig = kmsEncryptionConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NoEncryptionConfig")
    public NoEncryptionConfigEnum noEncryptionConfig;
    public EncryptionConfiguration withNoEncryptionConfig(NoEncryptionConfigEnum noEncryptionConfig) {
        this.noEncryptionConfig = noEncryptionConfig;
        return this;
    }
}