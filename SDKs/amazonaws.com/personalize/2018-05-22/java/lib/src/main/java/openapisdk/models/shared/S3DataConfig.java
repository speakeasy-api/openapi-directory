package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * S3DataConfig
 * The configuration details of an Amazon S3 input or output bucket.
**/
public class S3DataConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsKeyArn")
    public String kmsKeyArn;
    public S3DataConfig withKmsKeyArn(String kmsKeyArn) {
        this.kmsKeyArn = kmsKeyArn;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public S3DataConfig withPath(String path) {
        this.path = path;
        return this;
    }
}