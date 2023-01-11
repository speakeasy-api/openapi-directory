package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStudioPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public UpdateStudioPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}