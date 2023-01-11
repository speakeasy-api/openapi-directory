package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeValidDbInstanceModificationsRequest {
    public PostDescribeValidDbInstanceModificationsQueryParams queryParams;
    public PostDescribeValidDbInstanceModificationsRequest withQueryParams(PostDescribeValidDbInstanceModificationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeValidDbInstanceModificationsHeaders headers;
    public PostDescribeValidDbInstanceModificationsRequest withHeaders(PostDescribeValidDbInstanceModificationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeValidDbInstanceModificationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}