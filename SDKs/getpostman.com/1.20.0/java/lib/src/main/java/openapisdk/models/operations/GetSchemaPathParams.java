package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSchemaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public GetSchemaPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiVersionId")
    public String apiVersionId;
    public GetSchemaPathParams withApiVersionId(String apiVersionId) {
        this.apiVersionId = apiVersionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=schemaId")
    public String schemaId;
    public GetSchemaPathParams withSchemaId(String schemaId) {
        this.schemaId = schemaId;
        return this;
    }
}