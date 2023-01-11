package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class StartSchemaCreationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public StartSchemaCreationPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}