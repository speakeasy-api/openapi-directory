package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyUsage
 * The Key Usage X.509 v3 extension defines the purpose of the public key contained in the certificate.
**/
public class KeyUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public KeyUsageNameEnum name;
    public KeyUsage withName(KeyUsageNameEnum name) {
        this.name = name;
        return this;
    }
}