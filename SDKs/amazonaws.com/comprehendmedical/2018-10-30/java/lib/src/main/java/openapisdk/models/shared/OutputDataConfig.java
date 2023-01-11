package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputDataConfig
 * The output properties for a detection job.
**/
public class OutputDataConfig {
    @JsonProperty("S3Bucket")
    public String s3Bucket;
    public OutputDataConfig withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Key")
    public String s3Key;
    public OutputDataConfig withS3Key(String s3Key) {
        this.s3Key = s3Key;
        return this;
    }
}