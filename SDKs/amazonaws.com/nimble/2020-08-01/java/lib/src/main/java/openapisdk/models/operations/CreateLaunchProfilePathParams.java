package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateLaunchProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public CreateLaunchProfilePathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}