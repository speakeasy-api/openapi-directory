package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateModelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public UpdateModelPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=modelId")
    public String modelId;
    public UpdateModelPathParams withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
}