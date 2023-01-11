package openapisdk.models.operations;



public class DescribeIdentityProviderConfigResponse {
    public Object clientException;
    public DescribeIdentityProviderConfigResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DescribeIdentityProviderConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeIdentityProviderConfigResponse describeIdentityProviderConfigResponse;
    public DescribeIdentityProviderConfigResponse withDescribeIdentityProviderConfigResponse(openapisdk.models.shared.DescribeIdentityProviderConfigResponse describeIdentityProviderConfigResponse) {
        this.describeIdentityProviderConfigResponse = describeIdentityProviderConfigResponse;
        return this;
    }
    public Object invalidParameterException;
    public DescribeIdentityProviderConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeIdentityProviderConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DescribeIdentityProviderConfigResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeIdentityProviderConfigResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeIdentityProviderConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}