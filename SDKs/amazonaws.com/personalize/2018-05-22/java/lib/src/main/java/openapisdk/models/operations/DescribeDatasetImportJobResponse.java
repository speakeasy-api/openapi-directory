package openapisdk.models.operations;



public class DescribeDatasetImportJobResponse {
    public String contentType;
    public DescribeDatasetImportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDatasetImportJobResponse describeDatasetImportJobResponse;
    public DescribeDatasetImportJobResponse withDescribeDatasetImportJobResponse(openapisdk.models.shared.DescribeDatasetImportJobResponse describeDatasetImportJobResponse) {
        this.describeDatasetImportJobResponse = describeDatasetImportJobResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeDatasetImportJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDatasetImportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDatasetImportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}