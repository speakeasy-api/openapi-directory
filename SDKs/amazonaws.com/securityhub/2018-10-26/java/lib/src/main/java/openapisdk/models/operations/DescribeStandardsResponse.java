package openapisdk.models.operations;



public class DescribeStandardsResponse {
    public String contentType;
    public DescribeStandardsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStandardsResponse describeStandardsResponse;
    public DescribeStandardsResponse withDescribeStandardsResponse(openapisdk.models.shared.DescribeStandardsResponse describeStandardsResponse) {
        this.describeStandardsResponse = describeStandardsResponse;
        return this;
    }
    public Object internalException;
    public DescribeStandardsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DescribeStandardsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DescribeStandardsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeStandardsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}