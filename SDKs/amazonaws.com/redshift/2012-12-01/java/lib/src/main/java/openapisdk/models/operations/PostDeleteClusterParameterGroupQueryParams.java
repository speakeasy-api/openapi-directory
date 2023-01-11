package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteClusterParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteClusterParameterGroupActionEnum action;
    public PostDeleteClusterParameterGroupQueryParams withAction(PostDeleteClusterParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteClusterParameterGroupVersionEnum version;
    public PostDeleteClusterParameterGroupQueryParams withVersion(PostDeleteClusterParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}