package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStudioComponentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioComponentId")
    public String studioComponentId;
    public GetStudioComponentPathParams withStudioComponentId(String studioComponentId) {
        this.studioComponentId = studioComponentId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public GetStudioComponentPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}