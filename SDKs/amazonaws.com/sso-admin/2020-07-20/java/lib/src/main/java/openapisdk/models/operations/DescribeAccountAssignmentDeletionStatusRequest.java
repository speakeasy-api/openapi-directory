package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAccountAssignmentDeletionStatusRequest {
    public DescribeAccountAssignmentDeletionStatusHeaders headers;
    public DescribeAccountAssignmentDeletionStatusRequest withHeaders(DescribeAccountAssignmentDeletionStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAccountAssignmentDeletionStatusRequest request;
    public DescribeAccountAssignmentDeletionStatusRequest withRequest(openapisdk.models.shared.DescribeAccountAssignmentDeletionStatusRequest request) {
        this.request = request;
        return this;
    }
}