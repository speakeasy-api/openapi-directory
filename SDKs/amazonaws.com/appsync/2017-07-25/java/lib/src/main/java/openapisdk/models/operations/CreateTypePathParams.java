package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public CreateTypePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}