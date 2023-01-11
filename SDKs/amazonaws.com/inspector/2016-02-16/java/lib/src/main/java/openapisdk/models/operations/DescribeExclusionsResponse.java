package openapisdk.models.operations;



public class DescribeExclusionsResponse {
    public String contentType;
    public DescribeExclusionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeExclusionsResponse describeExclusionsResponse;
    public DescribeExclusionsResponse withDescribeExclusionsResponse(openapisdk.models.shared.DescribeExclusionsResponse describeExclusionsResponse) {
        this.describeExclusionsResponse = describeExclusionsResponse;
        return this;
    }
    public Object internalException;
    public DescribeExclusionsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public DescribeExclusionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeExclusionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}