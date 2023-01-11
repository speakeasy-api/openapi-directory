package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDataSourcePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public CreateDataSourcePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}