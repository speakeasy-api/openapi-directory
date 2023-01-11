package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyPair
 * Describes a key pair.
**/
public class KeyPair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PrivateKey")
    public String privateKey;
    public KeyPair withPrivateKey(String privateKey) {
        this.privateKey = privateKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PublicKey")
    public String publicKey;
    public KeyPair withPublicKey(String publicKey) {
        this.publicKey = publicKey;
        return this;
    }
}