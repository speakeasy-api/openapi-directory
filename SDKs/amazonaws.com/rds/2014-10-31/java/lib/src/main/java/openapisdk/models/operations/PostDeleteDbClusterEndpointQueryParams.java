package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteDbClusterEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteDbClusterEndpointActionEnum action;
    public PostDeleteDbClusterEndpointQueryParams withAction(PostDeleteDbClusterEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteDbClusterEndpointVersionEnum version;
    public PostDeleteDbClusterEndpointQueryParams withVersion(PostDeleteDbClusterEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}