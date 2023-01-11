package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbClusterParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDbClusterParameterGroupActionEnum action;
    public PostCreateDbClusterParameterGroupQueryParams withAction(PostCreateDbClusterParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDbClusterParameterGroupVersionEnum version;
    public PostCreateDbClusterParameterGroupQueryParams withVersion(PostCreateDbClusterParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}