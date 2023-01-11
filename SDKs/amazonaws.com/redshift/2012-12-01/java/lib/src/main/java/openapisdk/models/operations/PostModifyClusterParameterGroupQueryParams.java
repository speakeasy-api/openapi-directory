package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyClusterParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyClusterParameterGroupActionEnum action;
    public PostModifyClusterParameterGroupQueryParams withAction(PostModifyClusterParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyClusterParameterGroupVersionEnum version;
    public PostModifyClusterParameterGroupQueryParams withVersion(PostModifyClusterParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}