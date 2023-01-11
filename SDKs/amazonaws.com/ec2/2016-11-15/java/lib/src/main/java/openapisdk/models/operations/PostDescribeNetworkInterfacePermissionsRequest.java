package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNetworkInterfacePermissionsRequest {
    public PostDescribeNetworkInterfacePermissionsQueryParams queryParams;
    public PostDescribeNetworkInterfacePermissionsRequest withQueryParams(PostDescribeNetworkInterfacePermissionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeNetworkInterfacePermissionsHeaders headers;
    public PostDescribeNetworkInterfacePermissionsRequest withHeaders(PostDescribeNetworkInterfacePermissionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeNetworkInterfacePermissionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}