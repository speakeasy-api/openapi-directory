package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DatasetExportJobOutput
 * The output configuration parameters of a dataset export job.
**/
public class DatasetExportJobOutput {
    @JsonProperty("s3DataDestination")
    public S3DataConfig s3DataDestination;
    public DatasetExportJobOutput withS3DataDestination(S3DataConfig s3DataDestination) {
        this.s3DataDestination = s3DataDestination;
        return this;
    }
}