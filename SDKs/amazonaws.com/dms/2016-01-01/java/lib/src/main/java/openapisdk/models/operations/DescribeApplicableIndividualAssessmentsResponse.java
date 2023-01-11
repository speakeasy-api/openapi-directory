package openapisdk.models.operations;



public class DescribeApplicableIndividualAssessmentsResponse {
    public Object accessDeniedFault;
    public DescribeApplicableIndividualAssessmentsResponse withAccessDeniedFault(Object accessDeniedFault) {
        this.accessDeniedFault = accessDeniedFault;
        return this;
    }
    public String contentType;
    public DescribeApplicableIndividualAssessmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeApplicableIndividualAssessmentsResponse describeApplicableIndividualAssessmentsResponse;
    public DescribeApplicableIndividualAssessmentsResponse withDescribeApplicableIndividualAssessmentsResponse(openapisdk.models.shared.DescribeApplicableIndividualAssessmentsResponse describeApplicableIndividualAssessmentsResponse) {
        this.describeApplicableIndividualAssessmentsResponse = describeApplicableIndividualAssessmentsResponse;
        return this;
    }
    public Object invalidResourceStateFault;
    public DescribeApplicableIndividualAssessmentsResponse withInvalidResourceStateFault(Object invalidResourceStateFault) {
        this.invalidResourceStateFault = invalidResourceStateFault;
        return this;
    }
    public Object resourceNotFoundFault;
    public DescribeApplicableIndividualAssessmentsResponse withResourceNotFoundFault(Object resourceNotFoundFault) {
        this.resourceNotFoundFault = resourceNotFoundFault;
        return this;
    }
    public Long statusCode;
    public DescribeApplicableIndividualAssessmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}