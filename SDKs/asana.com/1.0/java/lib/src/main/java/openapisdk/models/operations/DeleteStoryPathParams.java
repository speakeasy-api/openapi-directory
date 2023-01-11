package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteStoryPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=story_gid")
    public String storyGid;
    public DeleteStoryPathParams withStoryGid(String storyGid) {
        this.storyGid = storyGid;
        return this;
    }
}