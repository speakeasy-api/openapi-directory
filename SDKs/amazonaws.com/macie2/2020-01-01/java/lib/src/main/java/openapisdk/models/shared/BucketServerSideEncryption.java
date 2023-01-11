package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketServerSideEncryption
 * Provides information about the default server-side encryption settings for an S3 bucket. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.
**/
public class BucketServerSideEncryption {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsMasterKeyId")
    public String kmsMasterKeyId;
    public BucketServerSideEncryption withKmsMasterKeyId(String kmsMasterKeyId) {
        this.kmsMasterKeyId = kmsMasterKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TypeEnum type;
    public BucketServerSideEncryption withType(TypeEnum type) {
        this.type = type;
        return this;
    }
}