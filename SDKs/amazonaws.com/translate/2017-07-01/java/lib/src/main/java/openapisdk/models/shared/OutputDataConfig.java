package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * OutputDataConfig
 * The output configuration properties for a batch translation job.
**/
public class OutputDataConfig {
    @JsonProperty("S3Uri")
    public String s3Uri;
    public OutputDataConfig withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
}