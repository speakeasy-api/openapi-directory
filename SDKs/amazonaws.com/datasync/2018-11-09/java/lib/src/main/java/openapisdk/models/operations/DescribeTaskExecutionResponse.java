package openapisdk.models.operations;



public class DescribeTaskExecutionResponse {
    public String contentType;
    public DescribeTaskExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTaskExecutionResponse describeTaskExecutionResponse;
    public DescribeTaskExecutionResponse withDescribeTaskExecutionResponse(openapisdk.models.shared.DescribeTaskExecutionResponse describeTaskExecutionResponse) {
        this.describeTaskExecutionResponse = describeTaskExecutionResponse;
        return this;
    }
    public Object internalException;
    public DescribeTaskExecutionResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeTaskExecutionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeTaskExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}