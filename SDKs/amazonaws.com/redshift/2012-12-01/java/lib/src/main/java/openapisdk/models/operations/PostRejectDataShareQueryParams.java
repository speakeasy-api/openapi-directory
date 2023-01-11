package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectDataShareQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRejectDataShareActionEnum action;
    public PostRejectDataShareQueryParams withAction(PostRejectDataShareActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRejectDataShareVersionEnum version;
    public PostRejectDataShareQueryParams withVersion(PostRejectDataShareVersionEnum version) {
        this.version = version;
        return this;
    }
}