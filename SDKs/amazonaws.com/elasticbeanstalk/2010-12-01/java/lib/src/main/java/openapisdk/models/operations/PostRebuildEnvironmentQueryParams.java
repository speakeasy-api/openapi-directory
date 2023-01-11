package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRebuildEnvironmentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRebuildEnvironmentActionEnum action;
    public PostRebuildEnvironmentQueryParams withAction(PostRebuildEnvironmentActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRebuildEnvironmentVersionEnum version;
    public PostRebuildEnvironmentQueryParams withVersion(PostRebuildEnvironmentVersionEnum version) {
        this.version = version;
        return this;
    }
}