package openapisdk.models.operations;



public class DescribeDatasetResponse {
    public String contentType;
    public DescribeDatasetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDatasetResponse describeDatasetResponse;
    public DescribeDatasetResponse withDescribeDatasetResponse(openapisdk.models.shared.DescribeDatasetResponse describeDatasetResponse) {
        this.describeDatasetResponse = describeDatasetResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeDatasetResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDatasetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDatasetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}