package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLaunchProfileInitializationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=launchProfileId")
    public String launchProfileId;
    public GetLaunchProfileInitializationPathParams withLaunchProfileId(String launchProfileId) {
        this.launchProfileId = launchProfileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public GetLaunchProfileInitializationPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}