package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateClusterParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateClusterParameterGroupActionEnum action;
    public PostCreateClusterParameterGroupQueryParams withAction(PostCreateClusterParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateClusterParameterGroupVersionEnum version;
    public PostCreateClusterParameterGroupQueryParams withVersion(PostCreateClusterParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}