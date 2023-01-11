package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputDataConfig
 * The input properties for an entities detection job. This includes the name of the S3 bucket and the path to the files to be analyzed. 
**/
public class InputDataConfig {
    @JsonProperty("S3Bucket")
    public String s3Bucket;
    public InputDataConfig withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Key")
    public String s3Key;
    public InputDataConfig withS3Key(String s3Key) {
        this.s3Key = s3Key;
        return this;
    }
}