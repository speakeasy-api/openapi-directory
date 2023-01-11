package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * EncryptionConfig
 * An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the <a>CreateDataset</a> and <a>CreatePredictor</a> requests.
**/
public class EncryptionConfig {
    @JsonProperty("KMSKeyArn")
    public String kmsKeyArn;
    public EncryptionConfig withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public EncryptionConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}