package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateLensReviewOutput
 * Output of a update lens review call.
**/
public class UpdateLensReviewOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensReview")
    public LensReview lensReview;
    public UpdateLensReviewOutput withLensReview(LensReview lensReview) {
        this.lensReview = lensReview;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public UpdateLensReviewOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}