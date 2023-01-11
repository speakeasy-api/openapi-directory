package openapisdk.models.operations;



public class DescribeLocationEfsResponse {
    public String contentType;
    public DescribeLocationEfsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLocationEfsResponse describeLocationEfsResponse;
    public DescribeLocationEfsResponse withDescribeLocationEfsResponse(openapisdk.models.shared.DescribeLocationEfsResponse describeLocationEfsResponse) {
        this.describeLocationEfsResponse = describeLocationEfsResponse;
        return this;
    }
    public Object internalException;
    public DescribeLocationEfsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeLocationEfsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeLocationEfsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}