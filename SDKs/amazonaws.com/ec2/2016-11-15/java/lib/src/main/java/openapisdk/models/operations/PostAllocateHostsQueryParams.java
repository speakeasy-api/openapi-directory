package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAllocateHostsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAllocateHostsActionEnum action;
    public PostAllocateHostsQueryParams withAction(PostAllocateHostsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAllocateHostsVersionEnum version;
    public PostAllocateHostsQueryParams withVersion(PostAllocateHostsVersionEnum version) {
        this.version = version;
        return this;
    }
}