package openapisdk.models.operations;



public class DescribeKeyResponse {
    public String contentType;
    public DescribeKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyTimeoutException;
    public DescribeKeyResponse withDependencyTimeoutException(Object dependencyTimeoutException) {
        this.dependencyTimeoutException = dependencyTimeoutException;
        return this;
    }
    public openapisdk.models.shared.DescribeKeyResponse describeKeyResponse;
    public DescribeKeyResponse withDescribeKeyResponse(openapisdk.models.shared.DescribeKeyResponse describeKeyResponse) {
        this.describeKeyResponse = describeKeyResponse;
        return this;
    }
    public Object invalidArnException;
    public DescribeKeyResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object kmsInternalException;
    public DescribeKeyResponse withKmsInternalException(Object kmsInternalException) {
        this.kmsInternalException = kmsInternalException;
        return this;
    }
    public Object notFoundException;
    public DescribeKeyResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}