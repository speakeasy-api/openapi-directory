package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeletePipelinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pipelineName")
    public String pipelineName;
    public DeletePipelinePathParams withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
}