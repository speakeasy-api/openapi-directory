package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAccountModificationsRequest {
    public DescribeAccountModificationsHeaders headers;
    public DescribeAccountModificationsRequest withHeaders(DescribeAccountModificationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAccountModificationsRequest request;
    public DescribeAccountModificationsRequest withRequest(openapisdk.models.shared.DescribeAccountModificationsRequest request) {
        this.request = request;
        return this;
    }
}