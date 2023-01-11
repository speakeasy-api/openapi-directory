package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModelsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetModelsPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}