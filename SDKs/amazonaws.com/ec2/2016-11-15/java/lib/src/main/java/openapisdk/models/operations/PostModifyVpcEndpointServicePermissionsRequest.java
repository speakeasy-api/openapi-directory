package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyVpcEndpointServicePermissionsRequest {
    public PostModifyVpcEndpointServicePermissionsQueryParams queryParams;
    public PostModifyVpcEndpointServicePermissionsRequest withQueryParams(PostModifyVpcEndpointServicePermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostModifyVpcEndpointServicePermissionsHeaders headers;
    public PostModifyVpcEndpointServicePermissionsRequest withHeaders(PostModifyVpcEndpointServicePermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostModifyVpcEndpointServicePermissionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}