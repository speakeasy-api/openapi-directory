package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateSchemaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public UpdateSchemaPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiVersionId")
    public String apiVersionId;
    public UpdateSchemaPathParams withApiVersionId(String apiVersionId) {
        this.apiVersionId = apiVersionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=schemaId")
    public String schemaId;
    public UpdateSchemaPathParams withSchemaId(String schemaId) {
        this.schemaId = schemaId;
        return this;
    }
}