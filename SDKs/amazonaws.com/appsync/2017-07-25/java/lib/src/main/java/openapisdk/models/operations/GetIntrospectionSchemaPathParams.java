package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetIntrospectionSchemaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetIntrospectionSchemaPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
}