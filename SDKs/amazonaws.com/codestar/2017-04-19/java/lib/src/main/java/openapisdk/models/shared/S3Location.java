package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3Location
 * The Amazon S3 location where the source code files provided with the project request are stored.
**/
public class S3Location {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketKey")
    public String bucketKey;
    public S3Location withBucketKey(String bucketKey) {
        this.bucketKey = bucketKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucketName")
    public String bucketName;
    public S3Location withBucketName(String bucketName) {
        this.bucketName = bucketName;
        return this;
    }
}