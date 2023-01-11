package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetStoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=story_gid")
    public String storyGid;
    public GetStoryPathParams withStoryGid(String storyGid) {
        this.storyGid = storyGid;
        return this;
    }
}