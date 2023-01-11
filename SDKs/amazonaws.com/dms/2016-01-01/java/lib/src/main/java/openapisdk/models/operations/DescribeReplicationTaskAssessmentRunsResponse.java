package openapisdk.models.operations;



public class DescribeReplicationTaskAssessmentRunsResponse {
    public String contentType;
    public DescribeReplicationTaskAssessmentRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeReplicationTaskAssessmentRunsResponse describeReplicationTaskAssessmentRunsResponse;
    public DescribeReplicationTaskAssessmentRunsResponse withDescribeReplicationTaskAssessmentRunsResponse(openapisdk.models.shared.DescribeReplicationTaskAssessmentRunsResponse describeReplicationTaskAssessmentRunsResponse) {
        this.describeReplicationTaskAssessmentRunsResponse = describeReplicationTaskAssessmentRunsResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeReplicationTaskAssessmentRunsResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeReplicationTaskAssessmentRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}