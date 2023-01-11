package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3RecordingConfig
 * Information about an S3 recording <code>Config</code>.
**/
public class S3RecordingConfig {
    @JsonProperty("bucketArn")
    public String bucketArn;
    public S3RecordingConfig withBucketArn(String bucketArn) {
        this.bucketArn = bucketArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public S3RecordingConfig withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public S3RecordingConfig withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}