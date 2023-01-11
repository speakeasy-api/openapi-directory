package openapisdk.models.operations;



public class DescribeStandardsControlsResponse {
    public String contentType;
    public DescribeStandardsControlsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStandardsControlsResponse describeStandardsControlsResponse;
    public DescribeStandardsControlsResponse withDescribeStandardsControlsResponse(openapisdk.models.shared.DescribeStandardsControlsResponse describeStandardsControlsResponse) {
        this.describeStandardsControlsResponse = describeStandardsControlsResponse;
        return this;
    }
    public Object internalException;
    public DescribeStandardsControlsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidAccessException;
    public DescribeStandardsControlsResponse withInvalidAccessException(Object invalidAccessException) {
        this.invalidAccessException = invalidAccessException;
        return this;
    }
    public Object invalidInputException;
    public DescribeStandardsControlsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeStandardsControlsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeStandardsControlsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}