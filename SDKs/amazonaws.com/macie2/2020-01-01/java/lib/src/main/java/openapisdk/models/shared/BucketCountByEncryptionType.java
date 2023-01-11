package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketCountByEncryptionType
 * Provides information about the number of S3 buckets that use certain types of server-side encryption by default or don't encrypt new objects by default. For detailed information about these settings, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.
**/
public class BucketCountByEncryptionType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsManaged")
    public Long kmsManaged;
    public BucketCountByEncryptionType withKmsManaged(Long kmsManaged) {
        this.kmsManaged = kmsManaged;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Managed")
    public Long s3Managed;
    public BucketCountByEncryptionType withS3Managed(Long s3Managed) {
        this.s3Managed = s3Managed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unencrypted")
    public Long unencrypted;
    public BucketCountByEncryptionType withUnencrypted(Long unencrypted) {
        this.unencrypted = unencrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unknown")
    public Long unknown;
    public BucketCountByEncryptionType withUnknown(Long unknown) {
        this.unknown = unknown;
        return this;
    }
}