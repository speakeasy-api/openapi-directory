package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStudioComponentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public CreateStudioComponentPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}