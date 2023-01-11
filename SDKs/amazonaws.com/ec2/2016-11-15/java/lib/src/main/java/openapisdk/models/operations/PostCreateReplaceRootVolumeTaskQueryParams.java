package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateReplaceRootVolumeTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateReplaceRootVolumeTaskActionEnum action;
    public PostCreateReplaceRootVolumeTaskQueryParams withAction(PostCreateReplaceRootVolumeTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateReplaceRootVolumeTaskVersionEnum version;
    public PostCreateReplaceRootVolumeTaskQueryParams withVersion(PostCreateReplaceRootVolumeTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}