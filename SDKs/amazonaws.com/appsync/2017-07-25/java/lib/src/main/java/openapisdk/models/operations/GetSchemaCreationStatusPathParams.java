package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchemaCreationStatusPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetSchemaCreationStatusPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}