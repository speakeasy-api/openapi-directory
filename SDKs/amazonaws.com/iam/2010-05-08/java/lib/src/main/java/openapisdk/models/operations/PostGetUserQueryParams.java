package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetUserActionEnum action;
    public PostGetUserQueryParams withAction(PostGetUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetUserVersionEnum version;
    public PostGetUserQueryParams withVersion(PostGetUserVersionEnum version) {
        this.version = version;
        return this;
    }
}