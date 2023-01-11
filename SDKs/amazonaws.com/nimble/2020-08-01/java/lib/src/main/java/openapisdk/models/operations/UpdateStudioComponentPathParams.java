package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStudioComponentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioComponentId")
    public String studioComponentId;
    public UpdateStudioComponentPathParams withStudioComponentId(String studioComponentId) {
        this.studioComponentId = studioComponentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public UpdateStudioComponentPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}