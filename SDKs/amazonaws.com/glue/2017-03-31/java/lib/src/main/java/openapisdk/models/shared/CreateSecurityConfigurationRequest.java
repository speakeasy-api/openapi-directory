package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateSecurityConfigurationRequest {
    @JsonProperty("EncryptionConfiguration")
    public EncryptionConfiguration encryptionConfiguration;
    public CreateSecurityConfigurationRequest withEncryptionConfiguration(EncryptionConfiguration encryptionConfiguration) {
        this.encryptionConfiguration = encryptionConfiguration;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateSecurityConfigurationRequest withName(String name) {
        this.name = name;
        return this;
    }
}