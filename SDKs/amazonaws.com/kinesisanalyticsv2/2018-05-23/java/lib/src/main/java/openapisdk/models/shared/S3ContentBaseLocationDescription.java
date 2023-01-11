package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3ContentBaseLocationDescription
 * The description of the S3 base location that holds the application.
**/
public class S3ContentBaseLocationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BasePath")
    public String basePath;
    public S3ContentBaseLocationDescription withBasePath(String basePath) {
        this.basePath = basePath;
        return this;
    }
    @JsonProperty("BucketARN")
    public String bucketARN;
    public S3ContentBaseLocationDescription withBucketArn(String bucketARN) {
        this.bucketARN = bucketARN;
        return this;
    }
}