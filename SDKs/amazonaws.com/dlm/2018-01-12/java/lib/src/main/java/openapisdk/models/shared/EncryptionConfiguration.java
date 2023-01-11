package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EncryptionConfiguration
 * Specifies the encryption settings for shared snapshots that are copied across Regions.
**/
public class EncryptionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CmkArn")
    public String cmkArn;
    public EncryptionConfiguration withCmkArn(String cmkArn) {
        this.cmkArn = cmkArn;
        return this;
    }
    @JsonProperty("Encrypted")
    public Boolean encrypted;
    public EncryptionConfiguration withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
}