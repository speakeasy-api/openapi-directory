package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetDbParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResetDbParameterGroupActionEnum action;
    public PostResetDbParameterGroupQueryParams withAction(PostResetDbParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResetDbParameterGroupVersionEnum version;
    public PostResetDbParameterGroupQueryParams withVersion(PostResetDbParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}