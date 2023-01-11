package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLaunchProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=launchProfileId")
    public String launchProfileId;
    public DeleteLaunchProfilePathParams withLaunchProfileId(String launchProfileId) {
        this.launchProfileId = launchProfileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public DeleteLaunchProfilePathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}