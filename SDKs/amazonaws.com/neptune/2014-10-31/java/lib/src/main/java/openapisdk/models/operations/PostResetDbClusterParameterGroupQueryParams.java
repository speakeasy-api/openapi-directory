package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetDbClusterParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResetDbClusterParameterGroupActionEnum action;
    public PostResetDbClusterParameterGroupQueryParams withAction(PostResetDbClusterParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResetDbClusterParameterGroupVersionEnum version;
    public PostResetDbClusterParameterGroupQueryParams withVersion(PostResetDbClusterParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}