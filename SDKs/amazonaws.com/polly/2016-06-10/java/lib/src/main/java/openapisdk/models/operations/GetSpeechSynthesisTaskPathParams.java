package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSpeechSynthesisTaskPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=TaskId")
    public String taskId;
    public GetSpeechSynthesisTaskPathParams withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}