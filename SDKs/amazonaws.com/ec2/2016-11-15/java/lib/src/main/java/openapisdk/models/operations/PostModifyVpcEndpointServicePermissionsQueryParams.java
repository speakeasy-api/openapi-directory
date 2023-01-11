package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcEndpointServicePermissionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyVpcEndpointServicePermissionsActionEnum action;
    public PostModifyVpcEndpointServicePermissionsQueryParams withAction(PostModifyVpcEndpointServicePermissionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyVpcEndpointServicePermissionsVersionEnum version;
    public PostModifyVpcEndpointServicePermissionsQueryParams withVersion(PostModifyVpcEndpointServicePermissionsVersionEnum version) {
        this.version = version;
        return this;
    }
}