package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDocumentationRelationsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetDocumentationRelationsPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiVersionId")
    public String apiVersionId;
    public GetDocumentationRelationsPathParams withApiVersionId(String apiVersionId) {
        this.apiVersionId = apiVersionId;
        return this;
    }
}