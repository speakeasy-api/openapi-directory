package openapisdk.models.operations;



public class DescribeDataSourcesResponse {
    public String contentType;
    public DescribeDataSourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDataSourcesOutput describeDataSourcesOutput;
    public DescribeDataSourcesResponse withDescribeDataSourcesOutput(openapisdk.models.shared.DescribeDataSourcesOutput describeDataSourcesOutput) {
        this.describeDataSourcesOutput = describeDataSourcesOutput;
        return this;
    }
    public Object internalServerException;
    public DescribeDataSourcesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public DescribeDataSourcesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeDataSourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}