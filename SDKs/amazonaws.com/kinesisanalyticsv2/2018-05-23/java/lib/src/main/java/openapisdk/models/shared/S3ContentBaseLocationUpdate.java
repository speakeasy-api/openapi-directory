package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3ContentBaseLocationUpdate
 * The information required to update the S3 base location that holds the application.
**/
public class S3ContentBaseLocationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BasePathUpdate")
    public String basePathUpdate;
    public S3ContentBaseLocationUpdate withBasePathUpdate(String basePathUpdate) {
        this.basePathUpdate = basePathUpdate;
        return this;
    }
    @JsonProperty("BucketARNUpdate")
    public String bucketARNUpdate;
    public S3ContentBaseLocationUpdate withBucketArnUpdate(String bucketARNUpdate) {
        this.bucketARNUpdate = bucketARNUpdate;
        return this;
    }
}