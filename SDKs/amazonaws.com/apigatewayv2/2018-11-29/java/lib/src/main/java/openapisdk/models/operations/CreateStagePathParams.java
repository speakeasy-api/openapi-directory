package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStagePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public CreateStagePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}