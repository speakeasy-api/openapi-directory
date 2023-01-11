package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDbParameterGroupActionEnum action;
    public PostModifyDbParameterGroupQueryParams withAction(PostModifyDbParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDbParameterGroupVersionEnum version;
    public PostModifyDbParameterGroupQueryParams withVersion(PostModifyDbParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}