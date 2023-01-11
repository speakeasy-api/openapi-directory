package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartReportCreationInput {
    @JsonProperty("S3Bucket")
    public String s3Bucket;
    public StartReportCreationInput withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
}