package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartPipelineReprocessingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pipelineName")
    public String pipelineName;
    public StartPipelineReprocessingPathParams withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
}