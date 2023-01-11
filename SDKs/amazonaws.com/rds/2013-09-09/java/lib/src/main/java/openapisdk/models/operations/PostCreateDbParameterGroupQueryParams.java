package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDbParameterGroupActionEnum action;
    public PostCreateDbParameterGroupQueryParams withAction(PostCreateDbParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDbParameterGroupVersionEnum version;
    public PostCreateDbParameterGroupQueryParams withVersion(PostCreateDbParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}