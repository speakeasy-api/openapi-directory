package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateRelationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public CreateRelationsPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiVersionId")
    public String apiVersionId;
    public CreateRelationsPathParams withApiVersionId(String apiVersionId) {
        this.apiVersionId = apiVersionId;
        return this;
    }
}