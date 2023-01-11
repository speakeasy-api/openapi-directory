package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3ContentBaseLocation
 * The S3 bucket that holds the application information.
**/
public class S3ContentBaseLocation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BasePath")
    public String basePath;
    public S3ContentBaseLocation withBasePath(String basePath) {
        this.basePath = basePath;
        return this;
    }
    @JsonProperty("BucketARN")
    public String bucketARN;
    public S3ContentBaseLocation withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
}