package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResolverPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public CreateResolverPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=typeName")
    public String typeName;
    public CreateResolverPathParams withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
}