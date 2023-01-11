package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGraphqlApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public UpdateGraphqlApiPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}