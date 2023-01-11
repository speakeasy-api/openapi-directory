package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRoutePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public CreateRoutePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}