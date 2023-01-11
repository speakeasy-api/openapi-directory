package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateUsageLimitQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateUsageLimitActionEnum action;
    public PostCreateUsageLimitQueryParams withAction(PostCreateUsageLimitActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateUsageLimitVersionEnum version;
    public PostCreateUsageLimitQueryParams withVersion(PostCreateUsageLimitVersionEnum version) {
        this.version = version;
        return this;
    }
}