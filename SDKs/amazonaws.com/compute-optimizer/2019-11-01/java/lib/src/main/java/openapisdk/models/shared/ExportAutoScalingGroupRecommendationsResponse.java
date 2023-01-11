package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExportAutoScalingGroupRecommendationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public ExportAutoScalingGroupRecommendationsResponse withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Destination")
    public S3Destination s3Destination;
    public ExportAutoScalingGroupRecommendationsResponse withS3Destination(S3Destination s3Destination) {
        this.s3Destination = s3Destination;
        return this;
    }
}