package openapisdk.models.operations;



public class DescribeLocationNfsResponse {
    public String contentType;
    public DescribeLocationNfsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLocationNfsResponse describeLocationNfsResponse;
    public DescribeLocationNfsResponse withDescribeLocationNfsResponse(openapisdk.models.shared.DescribeLocationNfsResponse describeLocationNfsResponse) {
        this.describeLocationNfsResponse = describeLocationNfsResponse;
        return this;
    }
    public Object internalException;
    public DescribeLocationNfsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeLocationNfsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeLocationNfsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}