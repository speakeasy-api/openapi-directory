package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StudioEncryptionConfiguration
 * Configuration of the encryption method that is used for the studio.
**/
public class StudioEncryptionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyArn")
    public String keyArn;
    public StudioEncryptionConfiguration withKeyArn(String keyArn) {
        this.keyArn = keyArn;
        return this;
    }
    @JsonProperty("keyType")
    public StudioEncryptionConfigurationKeyTypeEnum keyType;
    public StudioEncryptionConfiguration withKeyType(StudioEncryptionConfigurationKeyTypeEnum keyType) {
        this.keyType = keyType;
        return this;
    }
}