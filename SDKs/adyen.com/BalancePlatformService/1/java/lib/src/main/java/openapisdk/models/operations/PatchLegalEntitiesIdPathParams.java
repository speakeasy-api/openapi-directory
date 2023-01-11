package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchLegalEntitiesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchLegalEntitiesIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}