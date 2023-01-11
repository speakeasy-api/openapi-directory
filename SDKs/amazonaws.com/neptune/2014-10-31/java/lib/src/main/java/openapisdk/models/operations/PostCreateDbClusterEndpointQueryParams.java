package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateDbClusterEndpointQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateDbClusterEndpointActionEnum action;
    public PostCreateDbClusterEndpointQueryParams withAction(PostCreateDbClusterEndpointActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateDbClusterEndpointVersionEnum version;
    public PostCreateDbClusterEndpointQueryParams withVersion(PostCreateDbClusterEndpointVersionEnum version) {
        this.version = version;
        return this;
    }
}