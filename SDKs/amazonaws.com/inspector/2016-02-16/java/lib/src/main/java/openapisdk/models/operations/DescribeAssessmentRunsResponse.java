package openapisdk.models.operations;



public class DescribeAssessmentRunsResponse {
    public String contentType;
    public DescribeAssessmentRunsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAssessmentRunsResponse describeAssessmentRunsResponse;
    public DescribeAssessmentRunsResponse withDescribeAssessmentRunsResponse(openapisdk.models.shared.DescribeAssessmentRunsResponse describeAssessmentRunsResponse) {
        this.describeAssessmentRunsResponse = describeAssessmentRunsResponse;
        return this;
    }
    public Object internalException;
    public DescribeAssessmentRunsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public DescribeAssessmentRunsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeAssessmentRunsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}