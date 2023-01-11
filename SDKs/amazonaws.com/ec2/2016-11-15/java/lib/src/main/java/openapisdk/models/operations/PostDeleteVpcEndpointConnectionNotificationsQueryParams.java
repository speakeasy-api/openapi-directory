package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteVpcEndpointConnectionNotificationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteVpcEndpointConnectionNotificationsActionEnum action;
    public PostDeleteVpcEndpointConnectionNotificationsQueryParams withAction(PostDeleteVpcEndpointConnectionNotificationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteVpcEndpointConnectionNotificationsVersionEnum version;
    public PostDeleteVpcEndpointConnectionNotificationsQueryParams withVersion(PostDeleteVpcEndpointConnectionNotificationsVersionEnum version) {
        this.version = version;
        return this;
    }
}