package openapisdk.models.operations;



public class DescribeLocationFsxWindowsResponse {
    public String contentType;
    public DescribeLocationFsxWindowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLocationFsxWindowsResponse describeLocationFsxWindowsResponse;
    public DescribeLocationFsxWindowsResponse withDescribeLocationFsxWindowsResponse(openapisdk.models.shared.DescribeLocationFsxWindowsResponse describeLocationFsxWindowsResponse) {
        this.describeLocationFsxWindowsResponse = describeLocationFsxWindowsResponse;
        return this;
    }
    public Object internalException;
    public DescribeLocationFsxWindowsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeLocationFsxWindowsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeLocationFsxWindowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}