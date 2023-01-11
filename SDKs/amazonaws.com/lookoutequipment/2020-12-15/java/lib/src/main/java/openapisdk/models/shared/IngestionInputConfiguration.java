package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * IngestionInputConfiguration
 *  Specifies configuration information for the input data for the data ingestion job, including input data S3 location. 
**/
public class IngestionInputConfiguration {
    @JsonProperty("S3InputConfiguration")
    public IngestionS3InputConfiguration s3InputConfiguration;
    public IngestionInputConfiguration withS3InputConfiguration(IngestionS3InputConfiguration s3InputConfiguration) {
        this.s3InputConfiguration = s3InputConfiguration;
        return this;
    }
}