package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateLaunchProfileMemberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=launchProfileId")
    public String launchProfileId;
    public UpdateLaunchProfileMemberPathParams withLaunchProfileId(String launchProfileId) {
        this.launchProfileId = launchProfileId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=principalId")
    public String principalId;
    public UpdateLaunchProfileMemberPathParams withPrincipalId(String principalId) {
        this.principalId = principalId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public UpdateLaunchProfileMemberPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}