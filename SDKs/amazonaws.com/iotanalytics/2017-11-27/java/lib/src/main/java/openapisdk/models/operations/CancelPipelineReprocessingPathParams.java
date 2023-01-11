package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CancelPipelineReprocessingPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=pipelineName")
    public String pipelineName;
    public CancelPipelineReprocessingPathParams withPipelineName(String pipelineName) {
        this.pipelineName = pipelineName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=reprocessingId")
    public String reprocessingId;
    public CancelPipelineReprocessingPathParams withReprocessingId(String reprocessingId) {
        this.reprocessingId = reprocessingId;
        return this;
    }
}