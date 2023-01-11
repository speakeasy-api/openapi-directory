package openapisdk.models.operations;



public class DescribeReplicationTaskIndividualAssessmentsResponse {
    public String contentType;
    public DescribeReplicationTaskIndividualAssessmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeReplicationTaskIndividualAssessmentsResponse describeReplicationTaskIndividualAssessmentsResponse;
    public DescribeReplicationTaskIndividualAssessmentsResponse withDescribeReplicationTaskIndividualAssessmentsResponse(openapisdk.models.shared.DescribeReplicationTaskIndividualAssessmentsResponse describeReplicationTaskIndividualAssessmentsResponse) {
        this.describeReplicationTaskIndividualAssessmentsResponse = describeReplicationTaskIndividualAssessmentsResponse;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeReplicationTaskIndividualAssessmentsResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeReplicationTaskIndividualAssessmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}