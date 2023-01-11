package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeReservedInstancesModificationsRequest {
    public PostDescribeReservedInstancesModificationsQueryParams queryParams;
    public PostDescribeReservedInstancesModificationsRequest withQueryParams(PostDescribeReservedInstancesModificationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeReservedInstancesModificationsHeaders headers;
    public PostDescribeReservedInstancesModificationsRequest withHeaders(PostDescribeReservedInstancesModificationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeReservedInstancesModificationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}