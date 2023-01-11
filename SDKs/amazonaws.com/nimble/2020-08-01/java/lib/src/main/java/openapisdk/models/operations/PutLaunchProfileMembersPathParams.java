package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutLaunchProfileMembersPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=launchProfileId")
    public String launchProfileId;
    public PutLaunchProfileMembersPathParams withLaunchProfileId(String launchProfileId) {
        this.launchProfileId = launchProfileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public PutLaunchProfileMembersPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}