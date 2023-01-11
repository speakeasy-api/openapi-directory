package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeviceSecretVerifierConfigType
 * The device verifier against which it will be authenticated.
**/
public class DeviceSecretVerifierConfigType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PasswordVerifier")
    public String passwordVerifier;
    public DeviceSecretVerifierConfigType withPasswordVerifier(String passwordVerifier) {
        this.passwordVerifier = passwordVerifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Salt")
    public String salt;
    public DeviceSecretVerifierConfigType withSalt(String salt) {
        this.salt = salt;
        return this;
    }
}