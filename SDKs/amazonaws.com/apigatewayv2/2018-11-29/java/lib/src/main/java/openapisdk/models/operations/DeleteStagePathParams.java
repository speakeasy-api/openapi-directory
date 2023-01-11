package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteStagePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=stageName")
    public String stageName;
    public DeleteStagePathParams withStageName(String stageName) {
        this.stageName = stageName;
        return this;
    }
}