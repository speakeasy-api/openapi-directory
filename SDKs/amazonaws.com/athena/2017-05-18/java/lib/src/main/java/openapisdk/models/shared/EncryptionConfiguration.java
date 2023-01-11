package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EncryptionConfiguration
 * If query results are encrypted in Amazon S3, indicates the encryption option used (for example, <code>SSE-KMS</code> or <code>CSE-KMS</code>) and key information.
**/
public class EncryptionConfiguration {
    @JsonProperty("EncryptionOption")
    public EncryptionOptionEnum encryptionOption;
    public EncryptionConfiguration withEncryptionOption(EncryptionOptionEnum encryptionOption) {
        this.encryptionOption = encryptionOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKey")
    public String kmsKey;
    public EncryptionConfiguration withKmsKey(String kmsKey) {
        this.kmsKey = kmsKey;
        return this;
    }
}