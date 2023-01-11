package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetReportsEntityTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entity_type")
    public GetReportsEntityTypeEntityTypeEnum entityType;
    public GetReportsEntityTypePathParams withEntityType(GetReportsEntityTypeEntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
}