package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAccountAssignmentCreationStatusRequest {
    public DescribeAccountAssignmentCreationStatusHeaders headers;
    public DescribeAccountAssignmentCreationStatusRequest withHeaders(DescribeAccountAssignmentCreationStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAccountAssignmentCreationStatusRequest request;
    public DescribeAccountAssignmentCreationStatusRequest withRequest(openapisdk.models.shared.DescribeAccountAssignmentCreationStatusRequest request) {
        this.request = request;
        return this;
    }
}