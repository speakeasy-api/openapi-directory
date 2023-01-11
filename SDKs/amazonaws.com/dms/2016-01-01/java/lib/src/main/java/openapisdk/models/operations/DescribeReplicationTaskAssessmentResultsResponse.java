package openapisdk.models.operations;



public class DescribeReplicationTaskAssessmentResultsResponse {
    public String contentType;
    public DescribeReplicationTaskAssessmentResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeReplicationTaskAssessmentResultsResponse describeReplicationTaskAssessmentResultsResponse;
    public DescribeReplicationTaskAssessmentResultsResponse withDescribeReplicationTaskAssessmentResultsResponse(openapisdk.models.shared.DescribeReplicationTaskAssessmentResultsResponse describeReplicationTaskAssessmentResultsResponse) {
        this.describeReplicationTaskAssessmentResultsResponse = describeReplicationTaskAssessmentResultsResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeReplicationTaskAssessmentResultsResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeReplicationTaskAssessmentResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}