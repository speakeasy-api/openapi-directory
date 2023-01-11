package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResourcesAffected
 * Provides information about the resources that a finding applies to.
**/
public class ResourcesAffected {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Bucket")
    public S3Bucket s3Bucket;
    public ResourcesAffected withS3Bucket(S3Bucket s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Object")
    public S3Object s3Object;
    public ResourcesAffected withS3Object(S3Object s3Object) {
        this.s3Object = s3Object;
        return this;
    }
}