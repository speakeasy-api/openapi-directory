package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KmsGrantConstraints
 * Use this structure to propose allowing <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#cryptographic-operations">cryptographic operations</a> in the grant only when the operation request includes the specified <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context">encryption context</a>. You can specify only one type of encryption context. An empty map is treated as not specified. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/APIReference/API_GrantConstraints.html">GrantConstraints</a>.
**/
public class KmsGrantConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionContextEquals")
    public java.util.Map<String, String> encryptionContextEquals;
    public KmsGrantConstraints withEncryptionContextEquals(java.util.Map<String, String> encryptionContextEquals) {
        this.encryptionContextEquals = encryptionContextEquals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("encryptionContextSubset")
    public java.util.Map<String, String> encryptionContextSubset;
    public KmsGrantConstraints withEncryptionContextSubset(java.util.Map<String, String> encryptionContextSubset) {
        this.encryptionContextSubset = encryptionContextSubset;
        return this;
    }
}