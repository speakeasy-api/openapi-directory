package openapisdk.models.operations;



public class DescribeAssessmentTemplatesResponse {
    public String contentType;
    public DescribeAssessmentTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAssessmentTemplatesResponse describeAssessmentTemplatesResponse;
    public DescribeAssessmentTemplatesResponse withDescribeAssessmentTemplatesResponse(openapisdk.models.shared.DescribeAssessmentTemplatesResponse describeAssessmentTemplatesResponse) {
        this.describeAssessmentTemplatesResponse = describeAssessmentTemplatesResponse;
        return this;
    }
    public Object internalException;
    public DescribeAssessmentTemplatesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public DescribeAssessmentTemplatesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeAssessmentTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}