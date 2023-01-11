package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCancelBundleTaskQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCancelBundleTaskActionEnum action;
    public PostCancelBundleTaskQueryParams withAction(PostCancelBundleTaskActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCancelBundleTaskVersionEnum version;
    public PostCancelBundleTaskQueryParams withVersion(PostCancelBundleTaskVersionEnum version) {
        this.version = version;
        return this;
    }
}