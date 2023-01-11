package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KmsKeyDetails
 * <p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a respository association.</p> </li> </ul>
**/
public class KmsKeyDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionOption")
    public EncryptionOptionEnum encryptionOption;
    public KmsKeyDetails withEncryptionOption(EncryptionOptionEnum encryptionOption) {
        this.encryptionOption = encryptionOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSKeyId")
    public String kmsKeyId;
    public KmsKeyDetails withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
}