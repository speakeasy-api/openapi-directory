package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EncryptionConfiguration
 * Specifies an encryption configuration.
**/
public class EncryptionConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchEncryption")
    public CloudWatchEncryption cloudWatchEncryption;
    public EncryptionConfiguration withCloudWatchEncryption(CloudWatchEncryption cloudWatchEncryption) {
        this.cloudWatchEncryption = cloudWatchEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobBookmarksEncryption")
    public JobBookmarksEncryption jobBookmarksEncryption;
    public EncryptionConfiguration withJobBookmarksEncryption(JobBookmarksEncryption jobBookmarksEncryption) {
        this.jobBookmarksEncryption = jobBookmarksEncryption;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Encryption")
    public S3Encryption[] s3Encryption;
    public EncryptionConfiguration withS3Encryption(S3Encryption[] s3Encryption) {
        this.s3Encryption = s3Encryption;
        return this;
    }
}