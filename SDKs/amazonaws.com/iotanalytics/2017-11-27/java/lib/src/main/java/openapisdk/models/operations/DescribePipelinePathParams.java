package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribePipelinePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pipelineName")
    public String pipelineName;
    public DescribePipelinePathParams withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
}