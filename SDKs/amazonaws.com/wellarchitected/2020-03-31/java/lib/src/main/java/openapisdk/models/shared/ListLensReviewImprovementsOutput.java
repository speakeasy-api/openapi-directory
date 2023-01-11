package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListLensReviewImprovementsOutput
 * Output of a list lens review improvements call.
**/
public class ListLensReviewImprovementsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImprovementSummaries")
    public ImprovementSummary[] improvementSummaries;
    public ListLensReviewImprovementsOutput withImprovementSummaries(ImprovementSummary[] improvementSummaries) {
        this.improvementSummaries = improvementSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensAlias")
    public String lensAlias;
    public ListLensReviewImprovementsOutput withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MilestoneNumber")
    public Long milestoneNumber;
    public ListLensReviewImprovementsOutput withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListLensReviewImprovementsOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public ListLensReviewImprovementsOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}