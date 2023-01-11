package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateAnApiPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public UpdateAnApiPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}