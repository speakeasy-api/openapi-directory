package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAnswersOutput
 * Output of a list answers call.
**/
public class ListAnswersOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AnswerSummaries")
    public AnswerSummary[] answerSummaries;
    public ListAnswersOutput withAnswerSummaries(AnswerSummary[] answerSummaries) {
        this.answerSummaries = answerSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensAlias")
    public String lensAlias;
    public ListAnswersOutput withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MilestoneNumber")
    public Long milestoneNumber;
    public ListAnswersOutput withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAnswersOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public ListAnswersOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}