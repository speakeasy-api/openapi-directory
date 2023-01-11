package openapisdk.models.operations;



public class DescribeStatementResponse {
    public String contentType;
    public DescribeStatementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStatementResponse describeStatementResponse;
    public DescribeStatementResponse withDescribeStatementResponse(openapisdk.models.shared.DescribeStatementResponse describeStatementResponse) {
        this.describeStatementResponse = describeStatementResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeStatementResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeStatementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeStatementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeStatementResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}