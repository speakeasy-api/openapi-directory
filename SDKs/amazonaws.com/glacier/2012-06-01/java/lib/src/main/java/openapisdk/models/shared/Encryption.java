package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Encryption
 * Contains information about the encryption used to store the job results in Amazon S3. 
**/
public class Encryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionType")
    public EncryptionTypeEnum encryptionType;
    public Encryption withEncryptionType(EncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSContext")
    public String kmsContext;
    public Encryption withKmsContext(String kmsContext) {
        this.kmsContext = kmsContext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSKeyId")
    public String kmsKeyId;
    public Encryption withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
}