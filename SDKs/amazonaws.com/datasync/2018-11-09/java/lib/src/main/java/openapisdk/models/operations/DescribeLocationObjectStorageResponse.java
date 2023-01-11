package openapisdk.models.operations;



public class DescribeLocationObjectStorageResponse {
    public String contentType;
    public DescribeLocationObjectStorageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeLocationObjectStorageResponse describeLocationObjectStorageResponse;
    public DescribeLocationObjectStorageResponse withDescribeLocationObjectStorageResponse(openapisdk.models.shared.DescribeLocationObjectStorageResponse describeLocationObjectStorageResponse) {
        this.describeLocationObjectStorageResponse = describeLocationObjectStorageResponse;
        return this;
    }
    public Object internalException;
    public DescribeLocationObjectStorageResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeLocationObjectStorageResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeLocationObjectStorageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}