package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDbClusterEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDbClusterEndpointActionEnum action;
    public PostModifyDbClusterEndpointQueryParams withAction(PostModifyDbClusterEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDbClusterEndpointVersionEnum version;
    public PostModifyDbClusterEndpointQueryParams withVersion(PostModifyDbClusterEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}