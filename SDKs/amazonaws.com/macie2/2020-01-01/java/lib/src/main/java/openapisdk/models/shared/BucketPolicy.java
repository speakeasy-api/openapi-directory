package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BucketPolicy
 * Provides information about the permissions settings of the bucket policy for an S3 bucket.
**/
public class BucketPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowsPublicReadAccess")
    public Boolean allowsPublicReadAccess;
    public BucketPolicy withAllowsPublicReadAccess(Boolean allowsPublicReadAccess) {
        this.allowsPublicReadAccess = allowsPublicReadAccess;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowsPublicWriteAccess")
    public Boolean allowsPublicWriteAccess;
    public BucketPolicy withAllowsPublicWriteAccess(Boolean allowsPublicWriteAccess) {
        this.allowsPublicWriteAccess = allowsPublicWriteAccess;
        return this;
    }
}