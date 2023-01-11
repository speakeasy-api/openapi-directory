package openapisdk.models.operations;



public class DescribeLocationSmbResponse {
    public String contentType;
    public DescribeLocationSmbResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLocationSmbResponse describeLocationSmbResponse;
    public DescribeLocationSmbResponse withDescribeLocationSmbResponse(openapisdk.models.shared.DescribeLocationSmbResponse describeLocationSmbResponse) {
        this.describeLocationSmbResponse = describeLocationSmbResponse;
        return this;
    }
    public Object internalException;
    public DescribeLocationSmbResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeLocationSmbResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeLocationSmbResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}