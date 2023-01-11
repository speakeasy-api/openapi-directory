package openapisdk.models.operations;



public class DescribeDatasetExportJobResponse {
    public String contentType;
    public DescribeDatasetExportJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDatasetExportJobResponse describeDatasetExportJobResponse;
    public DescribeDatasetExportJobResponse withDescribeDatasetExportJobResponse(openapisdk.models.shared.DescribeDatasetExportJobResponse describeDatasetExportJobResponse) {
        this.describeDatasetExportJobResponse = describeDatasetExportJobResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeDatasetExportJobResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDatasetExportJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDatasetExportJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}