package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetAccessKeyLastUsedQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetAccessKeyLastUsedActionEnum action;
    public PostGetAccessKeyLastUsedQueryParams withAction(PostGetAccessKeyLastUsedActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetAccessKeyLastUsedVersionEnum version;
    public PostGetAccessKeyLastUsedQueryParams withVersion(PostGetAccessKeyLastUsedVersionEnum version) {
        this.version = version;
        return this;
    }
}