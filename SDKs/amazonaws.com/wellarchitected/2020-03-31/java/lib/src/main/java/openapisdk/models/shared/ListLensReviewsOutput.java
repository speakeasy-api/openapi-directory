package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLensReviewsOutput
 * Output of a list lens reviews call.
**/
public class ListLensReviewsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensReviewSummaries")
    public LensReviewSummary[] lensReviewSummaries;
    public ListLensReviewsOutput withLensReviewSummaries(LensReviewSummary[] lensReviewSummaries) {
        this.lensReviewSummaries = lensReviewSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MilestoneNumber")
    public Long milestoneNumber;
    public ListLensReviewsOutput withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLensReviewsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public ListLensReviewsOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}