package openapisdk.models.operations;



public class DescribeTableResponse {
    public String contentType;
    public DescribeTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTableOutput describeTableOutput;
    public DescribeTableResponse withDescribeTableOutput(openapisdk.models.shared.DescribeTableOutput describeTableOutput) {
        this.describeTableOutput = describeTableOutput;
        return this;
    }
    public Object internalServerError;
    public DescribeTableResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeTableResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}