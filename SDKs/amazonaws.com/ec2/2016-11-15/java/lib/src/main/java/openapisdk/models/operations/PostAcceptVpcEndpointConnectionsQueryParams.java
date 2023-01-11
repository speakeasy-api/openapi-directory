package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAcceptVpcEndpointConnectionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAcceptVpcEndpointConnectionsActionEnum action;
    public PostAcceptVpcEndpointConnectionsQueryParams withAction(PostAcceptVpcEndpointConnectionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAcceptVpcEndpointConnectionsVersionEnum version;
    public PostAcceptVpcEndpointConnectionsQueryParams withVersion(PostAcceptVpcEndpointConnectionsVersionEnum version) {
        this.version = version;
        return this;
    }
}