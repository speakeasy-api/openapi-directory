package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDbParameterGroupActionEnum action;
    public PostDeleteDbParameterGroupQueryParams withAction(PostDeleteDbParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDbParameterGroupVersionEnum version;
    public PostDeleteDbParameterGroupQueryParams withVersion(PostDeleteDbParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}