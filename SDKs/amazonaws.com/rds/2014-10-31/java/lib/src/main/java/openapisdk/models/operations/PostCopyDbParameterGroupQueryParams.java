package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyDbParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCopyDbParameterGroupActionEnum action;
    public PostCopyDbParameterGroupQueryParams withAction(PostCopyDbParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCopyDbParameterGroupVersionEnum version;
    public PostCopyDbParameterGroupQueryParams withVersion(PostCopyDbParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}