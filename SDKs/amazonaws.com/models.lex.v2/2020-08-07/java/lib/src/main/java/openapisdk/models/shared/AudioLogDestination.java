package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AudioLogDestination
 * The location of audio log files collected when conversation logging is enabled for a bot.
**/
public class AudioLogDestination {
    @JsonProperty("s3Bucket")
    public S3BucketLogDestination s3Bucket;
    public AudioLogDestination withS3Bucket(S3BucketLogDestination s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
}