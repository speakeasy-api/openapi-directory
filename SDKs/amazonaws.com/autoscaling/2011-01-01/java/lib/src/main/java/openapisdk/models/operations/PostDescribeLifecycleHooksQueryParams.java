package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLifecycleHooksQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLifecycleHooksActionEnum action;
    public PostDescribeLifecycleHooksQueryParams withAction(PostDescribeLifecycleHooksActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLifecycleHooksVersionEnum version;
    public PostDescribeLifecycleHooksQueryParams withVersion(PostDescribeLifecycleHooksVersionEnum version) {
        this.version = version;
        return this;
    }
}