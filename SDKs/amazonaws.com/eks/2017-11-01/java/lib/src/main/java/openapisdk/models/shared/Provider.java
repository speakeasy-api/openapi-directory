package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Provider
 * Identifies the Key Management Service (KMS) key used to encrypt the secrets.
**/
public class Provider {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyArn")
    public String keyArn;
    public Provider withKeyArn(String keyArn) {
        this.keyArn = keyArn;
        return this;
    }
}