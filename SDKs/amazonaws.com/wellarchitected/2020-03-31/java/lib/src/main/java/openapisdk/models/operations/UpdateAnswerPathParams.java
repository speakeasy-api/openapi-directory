package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAnswerPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LensAlias")
    public String lensAlias;
    public UpdateAnswerPathParams withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=QuestionId")
    public String questionId;
    public UpdateAnswerPathParams withQuestionId(String questionId) {
        this.questionId = questionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=WorkloadId")
    public String workloadId;
    public UpdateAnswerPathParams withWorkloadId(String workloadId) {
        this.workloadId = workloadId;
        return this;
    }
}