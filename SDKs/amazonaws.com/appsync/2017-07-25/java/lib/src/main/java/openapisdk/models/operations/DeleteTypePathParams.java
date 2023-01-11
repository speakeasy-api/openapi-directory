package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteTypePathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=typeName")
    public String typeName;
    public DeleteTypePathParams withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
}