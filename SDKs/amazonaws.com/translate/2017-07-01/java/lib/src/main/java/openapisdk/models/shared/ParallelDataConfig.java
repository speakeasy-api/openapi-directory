package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ParallelDataConfig
 * Specifies the format and S3 location of the parallel data input file.
**/
public class ParallelDataConfig {
    @JsonProperty("Format")
    public ParallelDataFormatEnum format;
    public ParallelDataConfig withFormat(ParallelDataFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonProperty("S3Uri")
    public String s3Uri;
    public ParallelDataConfig withS3Uri(String s3Uri) {
        this.s3Uri = s3Uri;
        return this;
    }
}