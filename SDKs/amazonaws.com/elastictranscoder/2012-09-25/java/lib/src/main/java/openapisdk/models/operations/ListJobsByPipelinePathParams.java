package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListJobsByPipelinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=PipelineId")
    public String pipelineId;
    public ListJobsByPipelinePathParams withPipelineId(String pipelineId) {
        this.pipelineId = pipelineId;
        return this;
    }
}