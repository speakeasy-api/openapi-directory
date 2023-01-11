package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiVersionPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public CreateApiVersionPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}