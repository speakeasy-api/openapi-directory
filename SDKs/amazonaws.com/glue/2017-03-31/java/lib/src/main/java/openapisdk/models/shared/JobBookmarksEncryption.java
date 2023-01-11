package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobBookmarksEncryption
 * Specifies how job bookmark data should be encrypted.
**/
public class JobBookmarksEncryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobBookmarksEncryptionMode")
    public JobBookmarksEncryptionModeEnum jobBookmarksEncryptionMode;
    public JobBookmarksEncryption withJobBookmarksEncryptionMode(JobBookmarksEncryptionModeEnum jobBookmarksEncryptionMode) {
        this.jobBookmarksEncryptionMode = jobBookmarksEncryptionMode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyArn")
    public String kmsKeyArn;
    public JobBookmarksEncryption withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
}