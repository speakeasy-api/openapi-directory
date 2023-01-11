package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLaunchProfilePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=launchProfileId")
    public String launchProfileId;
    public GetLaunchProfilePathParams withLaunchProfileId(String launchProfileId) {
        this.launchProfileId = launchProfileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public GetLaunchProfilePathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}