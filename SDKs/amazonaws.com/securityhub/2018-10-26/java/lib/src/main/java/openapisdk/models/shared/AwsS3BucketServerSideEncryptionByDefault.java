package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsS3BucketServerSideEncryptionByDefault
 * Specifies the default server-side encryption to apply to new objects in the bucket.
**/
public class AwsS3BucketServerSideEncryptionByDefault {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSMasterKeyID")
    public String kmsMasterKeyID;
    public AwsS3BucketServerSideEncryptionByDefault withKmsMasterKeyId(String kmsMasterKeyID) {
        this.kmsMasterKeyID = kmsMasterKeyID;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SSEAlgorithm")
    public String sseAlgorithm;
    public AwsS3BucketServerSideEncryptionByDefault withSseAlgorithm(String sseAlgorithm) {
        this.sseAlgorithm = sseAlgorithm;
        return this;
    }
}