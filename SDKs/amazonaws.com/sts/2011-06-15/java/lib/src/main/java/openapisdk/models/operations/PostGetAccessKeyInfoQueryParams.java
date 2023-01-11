package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAccessKeyInfoQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetAccessKeyInfoActionEnum action;
    public PostGetAccessKeyInfoQueryParams withAction(PostGetAccessKeyInfoActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetAccessKeyInfoVersionEnum version;
    public PostGetAccessKeyInfoQueryParams withVersion(PostGetAccessKeyInfoVersionEnum version) {
        this.version = version;
        return this;
    }
}