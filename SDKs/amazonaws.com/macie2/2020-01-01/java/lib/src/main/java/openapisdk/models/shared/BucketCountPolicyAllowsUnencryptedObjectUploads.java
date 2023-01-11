package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketCountPolicyAllowsUnencryptedObjectUploads
 * Provides information about the number of S3 buckets whose bucket policies do or don't require server-side encryption of objects when objects are uploaded to the buckets.
**/
public class BucketCountPolicyAllowsUnencryptedObjectUploads {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowsUnencryptedObjectUploads")
    public Long allowsUnencryptedObjectUploads;
    public BucketCountPolicyAllowsUnencryptedObjectUploads withAllowsUnencryptedObjectUploads(Long allowsUnencryptedObjectUploads) {
        this.allowsUnencryptedObjectUploads = allowsUnencryptedObjectUploads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deniesUnencryptedObjectUploads")
    public Long deniesUnencryptedObjectUploads;
    public BucketCountPolicyAllowsUnencryptedObjectUploads withDeniesUnencryptedObjectUploads(Long deniesUnencryptedObjectUploads) {
        this.deniesUnencryptedObjectUploads = deniesUnencryptedObjectUploads;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unknown")
    public Long unknown;
    public BucketCountPolicyAllowsUnencryptedObjectUploads withUnknown(Long unknown) {
        this.unknown = unknown;
        return this;
    }
}