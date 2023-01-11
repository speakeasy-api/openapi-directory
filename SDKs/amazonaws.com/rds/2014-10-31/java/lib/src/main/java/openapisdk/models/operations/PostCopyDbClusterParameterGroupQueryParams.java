package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCopyDbClusterParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCopyDbClusterParameterGroupActionEnum action;
    public PostCopyDbClusterParameterGroupQueryParams withAction(PostCopyDbClusterParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCopyDbClusterParameterGroupVersionEnum version;
    public PostCopyDbClusterParameterGroupQueryParams withVersion(PostCopyDbClusterParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}