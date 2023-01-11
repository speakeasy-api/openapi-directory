package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteUsageLimitQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteUsageLimitActionEnum action;
    public PostDeleteUsageLimitQueryParams withAction(PostDeleteUsageLimitActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteUsageLimitVersionEnum version;
    public PostDeleteUsageLimitQueryParams withVersion(PostDeleteUsageLimitVersionEnum version) {
        this.version = version;
        return this;
    }
}