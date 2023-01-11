package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResolverPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public DeleteResolverPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=fieldName")
    public String fieldName;
    public DeleteResolverPathParams withFieldName(String fieldName) {
        this.fieldName = fieldName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=typeName")
    public String typeName;
    public DeleteResolverPathParams withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
}