package openapisdk.models.operations;



public class RegisterClusterResponse {
    public Object clientException;
    public RegisterClusterResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public RegisterClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public RegisterClusterResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.RegisterClusterResponse registerClusterResponse;
    public RegisterClusterResponse withRegisterClusterResponse(openapisdk.models.shared.RegisterClusterResponse registerClusterResponse) {
        this.registerClusterResponse = registerClusterResponse;
        return this;
    }
    public Object resourceLimitExceededException;
    public RegisterClusterResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverException;
    public RegisterClusterResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceUnavailableException;
    public RegisterClusterResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public RegisterClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}