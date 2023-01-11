package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KmsEncryptionConfig
 * Describes an encryption key for a destination in Amazon S3.
**/
public class KmsEncryptionConfig {
    @JsonProperty("AWSKMSKeyARN")
    public String awskmsKeyARN;
    public KmsEncryptionConfig withAwskmsKeyArn(String awskmsKeyARN) {
        this.awskmsKeyARN = awskmsKeyARN;
        return this;
    }
}