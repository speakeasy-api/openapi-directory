package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelTemplatePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetModelTemplatePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=modelId")
    public String modelId;
    public GetModelTemplatePathParams withModelId(String modelId) {
        this.modelId = modelId;
        return this;
    }
}