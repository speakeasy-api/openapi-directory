package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeDefaultEncryptionConfigurationResponse {
    @JsonProperty("configurationStatus")
    public ConfigurationStatus configurationStatus;
    public DescribeDefaultEncryptionConfigurationResponse withConfigurationStatus(ConfigurationStatus configurationStatus) {
        this.configurationStatus = configurationStatus;
        return this;
    }
    @JsonProperty("encryptionType")
    public EncryptionTypeEnum encryptionType;
    public DescribeDefaultEncryptionConfigurationResponse withEncryptionType(EncryptionTypeEnum encryptionType) {
        this.encryptionType = encryptionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyArn")
    public String kmsKeyArn;
    public DescribeDefaultEncryptionConfigurationResponse withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
}