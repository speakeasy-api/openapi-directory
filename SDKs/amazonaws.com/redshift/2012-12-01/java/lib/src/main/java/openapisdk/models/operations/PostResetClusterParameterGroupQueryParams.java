package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetClusterParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResetClusterParameterGroupActionEnum action;
    public PostResetClusterParameterGroupQueryParams withAction(PostResetClusterParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResetClusterParameterGroupVersionEnum version;
    public PostResetClusterParameterGroupQueryParams withVersion(PostResetClusterParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}