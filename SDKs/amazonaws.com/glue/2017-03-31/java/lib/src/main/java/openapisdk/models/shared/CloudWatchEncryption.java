package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudWatchEncryption
 * Specifies how Amazon CloudWatch data should be encrypted.
**/
public class CloudWatchEncryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchEncryptionMode")
    public CloudWatchEncryptionModeEnum cloudWatchEncryptionMode;
    public CloudWatchEncryption withCloudWatchEncryptionMode(CloudWatchEncryptionModeEnum cloudWatchEncryptionMode) {
        this.cloudWatchEncryptionMode = cloudWatchEncryptionMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyArn")
    public String kmsKeyArn;
    public CloudWatchEncryption withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
}