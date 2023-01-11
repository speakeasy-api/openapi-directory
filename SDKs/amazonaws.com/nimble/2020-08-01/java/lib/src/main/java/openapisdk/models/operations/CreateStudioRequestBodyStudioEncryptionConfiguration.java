package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateStudioRequestBodyStudioEncryptionConfiguration
 * Configuration of the encryption method that is used for the studio.
**/
public class CreateStudioRequestBodyStudioEncryptionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyArn")
    public String keyArn;
    public CreateStudioRequestBodyStudioEncryptionConfiguration withKeyArn(String keyArn) {
        this.keyArn = keyArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("keyType")
    public openapisdk.models.shared.StudioEncryptionConfigurationKeyTypeEnum keyType;
    public CreateStudioRequestBodyStudioEncryptionConfiguration withKeyType(openapisdk.models.shared.StudioEncryptionConfigurationKeyTypeEnum keyType) {
        this.keyType = keyType;
        return this;
    }
}