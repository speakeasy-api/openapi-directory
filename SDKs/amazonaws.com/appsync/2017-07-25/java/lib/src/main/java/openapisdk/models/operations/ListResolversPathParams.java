package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListResolversPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public ListResolversPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=typeName")
    public String typeName;
    public ListResolversPathParams withTypeName(String typeName) {
        this.typeName = typeName;
        return this;
    }
}