package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbClusterParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDbClusterParameterGroupActionEnum action;
    public PostModifyDbClusterParameterGroupQueryParams withAction(PostModifyDbClusterParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDbClusterParameterGroupVersionEnum version;
    public PostModifyDbClusterParameterGroupQueryParams withVersion(PostModifyDbClusterParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}