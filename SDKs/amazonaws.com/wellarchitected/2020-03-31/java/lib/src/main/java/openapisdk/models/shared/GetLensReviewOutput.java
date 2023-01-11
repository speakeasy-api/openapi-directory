package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetLensReviewOutput
 * Output of a get lens review call.
**/
public class GetLensReviewOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensReview")
    public LensReview lensReview;
    public GetLensReviewOutput withLensReview(LensReview lensReview) {
        this.lensReview = lensReview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MilestoneNumber")
    public Long milestoneNumber;
    public GetLensReviewOutput withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public GetLensReviewOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}