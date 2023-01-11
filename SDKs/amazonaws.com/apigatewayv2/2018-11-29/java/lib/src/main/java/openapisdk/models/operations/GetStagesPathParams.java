package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStagesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetStagesPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}