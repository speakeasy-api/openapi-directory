package openapisdk.models.operations;



public class DescribeAssessmentTargetsResponse {
    public String contentType;
    public DescribeAssessmentTargetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAssessmentTargetsResponse describeAssessmentTargetsResponse;
    public DescribeAssessmentTargetsResponse withDescribeAssessmentTargetsResponse(openapisdk.models.shared.DescribeAssessmentTargetsResponse describeAssessmentTargetsResponse) {
        this.describeAssessmentTargetsResponse = describeAssessmentTargetsResponse;
        return this;
    }
    public Object internalException;
    public DescribeAssessmentTargetsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public DescribeAssessmentTargetsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeAssessmentTargetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}