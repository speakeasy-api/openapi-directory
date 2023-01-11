package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputDataConfig
 * The output data configuration that was supplied when the export job was created.
**/
public class OutputDataConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Configuration")
    public S3Configuration s3Configuration;
    public OutputDataConfig withS3Configuration(S3Configuration s3Configuration) {
        this.s3Configuration = s3Configuration;
        return this;
    }
}