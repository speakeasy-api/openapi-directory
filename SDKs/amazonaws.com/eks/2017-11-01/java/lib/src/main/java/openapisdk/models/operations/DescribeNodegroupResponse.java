package openapisdk.models.operations;



public class DescribeNodegroupResponse {
    public Object clientException;
    public DescribeNodegroupResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeNodegroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeNodegroupResponse describeNodegroupResponse;
    public DescribeNodegroupResponse withDescribeNodegroupResponse(openapisdk.models.shared.DescribeNodegroupResponse describeNodegroupResponse) {
        this.describeNodegroupResponse = describeNodegroupResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeNodegroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeNodegroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DescribeNodegroupResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeNodegroupResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeNodegroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}