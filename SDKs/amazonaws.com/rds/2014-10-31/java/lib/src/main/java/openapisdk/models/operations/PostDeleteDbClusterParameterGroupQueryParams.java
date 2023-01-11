package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbClusterParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDbClusterParameterGroupActionEnum action;
    public PostDeleteDbClusterParameterGroupQueryParams withAction(PostDeleteDbClusterParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDbClusterParameterGroupVersionEnum version;
    public PostDeleteDbClusterParameterGroupQueryParams withVersion(PostDeleteDbClusterParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}