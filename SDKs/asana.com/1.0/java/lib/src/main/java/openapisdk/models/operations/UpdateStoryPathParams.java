package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=story_gid")
    public String storyGid;
    public UpdateStoryPathParams withStoryGid(String storyGid) {
        this.storyGid = storyGid;
        return this;
    }
}