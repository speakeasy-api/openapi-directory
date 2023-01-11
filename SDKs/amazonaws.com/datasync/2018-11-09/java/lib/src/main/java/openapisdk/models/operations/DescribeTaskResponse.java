package openapisdk.models.operations;



public class DescribeTaskResponse {
    public String contentType;
    public DescribeTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTaskResponse describeTaskResponse;
    public DescribeTaskResponse withDescribeTaskResponse(openapisdk.models.shared.DescribeTaskResponse describeTaskResponse) {
        this.describeTaskResponse = describeTaskResponse;
        return this;
    }
    public Object internalException;
    public DescribeTaskResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeTaskResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}