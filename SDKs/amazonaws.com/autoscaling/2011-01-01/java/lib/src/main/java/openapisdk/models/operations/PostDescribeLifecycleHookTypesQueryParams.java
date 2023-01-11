package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeLifecycleHookTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeLifecycleHookTypesActionEnum action;
    public PostDescribeLifecycleHookTypesQueryParams withAction(PostDescribeLifecycleHookTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeLifecycleHookTypesVersionEnum version;
    public PostDescribeLifecycleHookTypesQueryParams withVersion(PostDescribeLifecycleHookTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}