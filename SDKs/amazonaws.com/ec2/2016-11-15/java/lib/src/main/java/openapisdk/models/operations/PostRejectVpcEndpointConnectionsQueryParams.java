package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRejectVpcEndpointConnectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostRejectVpcEndpointConnectionsActionEnum action;
    public PostRejectVpcEndpointConnectionsQueryParams withAction(PostRejectVpcEndpointConnectionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostRejectVpcEndpointConnectionsVersionEnum version;
    public PostRejectVpcEndpointConnectionsQueryParams withVersion(PostRejectVpcEndpointConnectionsVersionEnum version) {
        this.version = version;
        return this;
    }
}