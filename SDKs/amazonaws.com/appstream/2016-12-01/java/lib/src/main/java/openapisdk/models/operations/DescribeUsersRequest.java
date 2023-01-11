package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeUsersRequest {
    public DescribeUsersHeaders headers;
    public DescribeUsersRequest withHeaders(DescribeUsersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeUsersRequest request;
    public DescribeUsersRequest withRequest(openapisdk.models.shared.DescribeUsersRequest request) {
        this.request = request;
        return this;
    }
}