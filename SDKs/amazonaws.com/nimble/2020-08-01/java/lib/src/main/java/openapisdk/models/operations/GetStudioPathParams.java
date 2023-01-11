package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStudioPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public GetStudioPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}