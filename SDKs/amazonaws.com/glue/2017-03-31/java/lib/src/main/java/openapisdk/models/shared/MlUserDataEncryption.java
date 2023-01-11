package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MlUserDataEncryption
 * The encryption-at-rest settings of the transform that apply to accessing user data.
**/
public class MlUserDataEncryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public MlUserDataEncryption withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonProperty("MlUserDataEncryptionMode")
    public MlUserDataEncryptionModeStringEnum mlUserDataEncryptionMode;
    public MlUserDataEncryption withMlUserDataEncryptionMode(MlUserDataEncryptionModeStringEnum mlUserDataEncryptionMode) {
        this.mlUserDataEncryptionMode = mlUserDataEncryptionMode;
        return this;
    }
}