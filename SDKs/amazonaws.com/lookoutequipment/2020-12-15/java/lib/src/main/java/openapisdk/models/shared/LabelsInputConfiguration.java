package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LabelsInputConfiguration
 * Contains the configuration information for the S3 location being used to hold label data. 
**/
public class LabelsInputConfiguration {
    @JsonProperty("S3InputConfiguration")
    public LabelsS3InputConfiguration s3InputConfiguration;
    public LabelsInputConfiguration withS3InputConfiguration(LabelsS3InputConfiguration s3InputConfiguration) {
        this.s3InputConfiguration = s3InputConfiguration;
        return this;
    }
}