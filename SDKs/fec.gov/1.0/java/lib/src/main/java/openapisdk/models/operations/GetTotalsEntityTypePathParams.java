package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTotalsEntityTypePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=entity_type")
    public GetTotalsEntityTypeEntityTypeEnum entityType;
    public GetTotalsEntityTypePathParams withEntityType(GetTotalsEntityTypeEntityTypeEnum entityType) {
        this.entityType = entityType;
        return this;
    }
}