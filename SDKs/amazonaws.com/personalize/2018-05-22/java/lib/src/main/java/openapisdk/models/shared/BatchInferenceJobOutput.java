package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * BatchInferenceJobOutput
 * The output configuration parameters of a batch inference job.
**/
public class BatchInferenceJobOutput {
    @JsonProperty("s3DataDestination")
    public S3DataConfig s3DataDestination;
    public BatchInferenceJobOutput withS3DataDestination(S3DataConfig s3DataDestination) {
        this.s3DataDestination = s3DataDestination;
        return this;
    }
}