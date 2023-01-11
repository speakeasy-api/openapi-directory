package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListLaunchProfilesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=studioId")
    public String studioId;
    public ListLaunchProfilesPathParams withStudioId(String studioId) {
        this.studioId = studioId;
        return this;
    }
}