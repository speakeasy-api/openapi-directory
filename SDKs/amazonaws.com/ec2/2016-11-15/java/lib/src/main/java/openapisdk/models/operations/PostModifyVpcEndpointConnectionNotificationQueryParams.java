package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcEndpointConnectionNotificationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVpcEndpointConnectionNotificationActionEnum action;
    public PostModifyVpcEndpointConnectionNotificationQueryParams withAction(PostModifyVpcEndpointConnectionNotificationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVpcEndpointConnectionNotificationVersionEnum version;
    public PostModifyVpcEndpointConnectionNotificationQueryParams withVersion(PostModifyVpcEndpointConnectionNotificationVersionEnum version) {
        this.version = version;
        return this;
    }
}