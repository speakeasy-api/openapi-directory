package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateVpcEndpointConnectionNotificationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateVpcEndpointConnectionNotificationActionEnum action;
    public PostCreateVpcEndpointConnectionNotificationQueryParams withAction(PostCreateVpcEndpointConnectionNotificationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateVpcEndpointConnectionNotificationVersionEnum version;
    public PostCreateVpcEndpointConnectionNotificationQueryParams withVersion(PostCreateVpcEndpointConnectionNotificationVersionEnum version) {
        this.version = version;
        return this;
    }
}