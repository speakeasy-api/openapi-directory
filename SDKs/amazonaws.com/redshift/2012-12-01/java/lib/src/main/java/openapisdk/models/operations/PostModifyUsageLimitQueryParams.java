package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyUsageLimitQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyUsageLimitActionEnum action;
    public PostModifyUsageLimitQueryParams withAction(PostModifyUsageLimitActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyUsageLimitVersionEnum version;
    public PostModifyUsageLimitQueryParams withVersion(PostModifyUsageLimitVersionEnum version) {
        this.version = version;
        return this;
    }
}