package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PasswordData
 * The password data for the Windows Server-based instance, including the ciphertext and the key pair name.
**/
public class PasswordData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ciphertext")
    public String ciphertext;
    public PasswordData withCiphertext(String ciphertext) {
        this.ciphertext = ciphertext;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyPairName")
    public String keyPairName;
    public PasswordData withKeyPairName(String keyPairName) {
        this.keyPairName = keyPairName;
        return this;
    }
}