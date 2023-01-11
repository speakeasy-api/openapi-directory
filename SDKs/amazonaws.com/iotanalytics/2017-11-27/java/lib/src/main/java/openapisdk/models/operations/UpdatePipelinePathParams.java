package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdatePipelinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pipelineName")
    public String pipelineName;
    public UpdatePipelinePathParams withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
}