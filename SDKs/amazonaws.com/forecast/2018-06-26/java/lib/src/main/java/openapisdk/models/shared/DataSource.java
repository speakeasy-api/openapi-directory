package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DataSource
 * The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the <a>CreateDatasetImportJob</a> request.
**/
public class DataSource {
    @JsonProperty("S3Config")
    public S3Config s3Config;
    public DataSource withS3Config(S3Config s3Config) {
        this.s3Config = s3Config;
        return this;
    }
}