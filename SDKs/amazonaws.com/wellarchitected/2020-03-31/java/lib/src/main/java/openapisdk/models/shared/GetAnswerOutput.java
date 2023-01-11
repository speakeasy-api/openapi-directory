package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetAnswerOutput
 * Output of a get answer call.
**/
public class GetAnswerOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Answer")
    public Answer answer;
    public GetAnswerOutput withAnswer(Answer answer) {
        this.answer = answer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensAlias")
    public String lensAlias;
    public GetAnswerOutput withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MilestoneNumber")
    public Long milestoneNumber;
    public GetAnswerOutput withMilestoneNumber(Long milestoneNumber) {
        this.milestoneNumber = milestoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public GetAnswerOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}