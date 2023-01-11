package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExportLambdaFunctionRecommendationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public ExportLambdaFunctionRecommendationsResponse withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Destination")
    public S3Destination s3Destination;
    public ExportLambdaFunctionRecommendationsResponse withS3Destination(S3Destination s3Destination) {
        this.s3Destination = s3Destination;
        return this;
    }
}