package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStudioComponentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioComponentId")
    public String studioComponentId;
    public DeleteStudioComponentPathParams withStudioComponentId(String studioComponentId) {
        this.studioComponentId = studioComponentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public DeleteStudioComponentPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}