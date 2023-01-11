package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeLifecycleHookTypesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeLifecycleHookTypesActionEnum action;
    public GetDescribeLifecycleHookTypesQueryParams withAction(GetDescribeLifecycleHookTypesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeLifecycleHookTypesVersionEnum version;
    public GetDescribeLifecycleHookTypesQueryParams withVersion(GetDescribeLifecycleHookTypesVersionEnum version) {
        this.version = version;
        return this;
    }
}