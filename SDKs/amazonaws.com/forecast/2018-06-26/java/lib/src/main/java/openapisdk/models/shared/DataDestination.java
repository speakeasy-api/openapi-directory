package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DataDestination
 * The destination for an export job. Provide an S3 path, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an AWS Key Management Service (KMS) key (optional). 
**/
public class DataDestination {
    @JsonProperty("S3Config")
    public S3Config s3Config;
    public DataDestination withS3Config(S3Config s3Config) {
        this.s3Config = s3Config;
        return this;
    }
}