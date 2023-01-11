package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetModelPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=modelId")
    public String modelId;
    public GetModelPathParams withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
}