package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssociateRepositoryRequestBodyKmsKeyDetails
 * <p>An object that contains:</p> <ul> <li> <p>The encryption option for a repository association. It is either owned by Amazon Web Services Key Management Service (KMS) (<code>AWS_OWNED_CMK</code>) or customer managed (<code>CUSTOMER_MANAGED_CMK</code>).</p> </li> <li> <p>The ID of the Amazon Web Services KMS key that is associated with a respository association.</p> </li> </ul>
**/
public class AssociateRepositoryRequestBodyKmsKeyDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EncryptionOption")
    public openapisdk.models.shared.EncryptionOptionEnum encryptionOption;
    public AssociateRepositoryRequestBodyKmsKeyDetails withEncryptionOption(openapisdk.models.shared.EncryptionOptionEnum encryptionOption) {
        this.encryptionOption = encryptionOption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSKeyId")
    public String kmsKeyId;
    public AssociateRepositoryRequestBodyKmsKeyDetails withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
}