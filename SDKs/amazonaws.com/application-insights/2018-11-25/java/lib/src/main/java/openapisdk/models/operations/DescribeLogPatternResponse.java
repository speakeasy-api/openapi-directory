package openapisdk.models.operations;



public class DescribeLogPatternResponse {
    public String contentType;
    public DescribeLogPatternResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLogPatternResponse describeLogPatternResponse;
    public DescribeLogPatternResponse withDescribeLogPatternResponse(openapisdk.models.shared.DescribeLogPatternResponse describeLogPatternResponse) {
        this.describeLogPatternResponse = describeLogPatternResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeLogPatternResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeLogPatternResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeLogPatternResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeLogPatternResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}