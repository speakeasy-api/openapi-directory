package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SyncRelationsWithSchemaPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiId")
    public String apiId;
    public SyncRelationsWithSchemaPathParams withApiId(String apiId) {
        this.apiId = apiId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=apiVersionId")
    public String apiVersionId;
    public SyncRelationsWithSchemaPathParams withApiVersionId(String apiVersionId) {
        this.apiVersionId = apiVersionId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entityId")
    public String entityId;
    public SyncRelationsWithSchemaPathParams withEntityId(String entityId) {
        this.entityId = entityId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entityType")
    public String entityType;
    public SyncRelationsWithSchemaPathParams withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
}