package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3ContentLocationUpdate
 * Describes an update for the Amazon S3 code content location for an application.
**/
public class S3ContentLocationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BucketARNUpdate")
    public String bucketARNUpdate;
    public S3ContentLocationUpdate withBucketArnUpdate(String bucketARNUpdate) {
        this.bucketARNUpdate = bucketARNUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FileKeyUpdate")
    public String fileKeyUpdate;
    public S3ContentLocationUpdate withFileKeyUpdate(String fileKeyUpdate) {
        this.fileKeyUpdate = fileKeyUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ObjectVersionUpdate")
    public String objectVersionUpdate;
    public S3ContentLocationUpdate withObjectVersionUpdate(String objectVersionUpdate) {
        this.objectVersionUpdate = objectVersionUpdate;
        return this;
    }
}