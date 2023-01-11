package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateAnswerOutput
 * Output of a update answer call.
**/
public class UpdateAnswerOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Answer")
    public Answer answer;
    public UpdateAnswerOutput withAnswer(Answer answer) {
        this.answer = answer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensAlias")
    public String lensAlias;
    public UpdateAnswerOutput withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkloadId")
    public String workloadId;
    public UpdateAnswerOutput withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}