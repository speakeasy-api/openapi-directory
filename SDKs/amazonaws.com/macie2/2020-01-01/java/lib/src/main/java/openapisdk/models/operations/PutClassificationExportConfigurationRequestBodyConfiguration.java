package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutClassificationExportConfigurationRequestBodyConfiguration
 * Specifies where to store data classification results, and the encryption settings to use when storing results in that location. Currently, you can store classification results only in an S3 bucket.
**/
public class PutClassificationExportConfigurationRequestBodyConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Destination")
    public openapisdk.models.shared.S3Destination s3Destination;
    public PutClassificationExportConfigurationRequestBodyConfiguration withS3Destination(openapisdk.models.shared.S3Destination s3Destination) {
        this.s3Destination = s3Destination;
        return this;
    }
}