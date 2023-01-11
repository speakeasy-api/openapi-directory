package openapisdk.models.operations;



public class DescribeDatasetGroupResponse {
    public String contentType;
    public DescribeDatasetGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDatasetGroupResponse describeDatasetGroupResponse;
    public DescribeDatasetGroupResponse withDescribeDatasetGroupResponse(openapisdk.models.shared.DescribeDatasetGroupResponse describeDatasetGroupResponse) {
        this.describeDatasetGroupResponse = describeDatasetGroupResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeDatasetGroupResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDatasetGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDatasetGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}