package openapisdk.models.operations;



public class CreateCapacityProviderResponse {
    public Object clientException;
    public CreateCapacityProviderResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateCapacityProviderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCapacityProviderResponse createCapacityProviderResponse;
    public CreateCapacityProviderResponse withCreateCapacityProviderResponse(openapisdk.models.shared.CreateCapacityProviderResponse createCapacityProviderResponse) {
        this.createCapacityProviderResponse = createCapacityProviderResponse;
        return this;
    }
    public Object invalidParameterException;
    public CreateCapacityProviderResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateCapacityProviderResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object serverException;
    public CreateCapacityProviderResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public CreateCapacityProviderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object updateInProgressException;
    public CreateCapacityProviderResponse withUpdateInProgressException(Object updateInProgressException) {
        this.updateInProgressException = updateInProgressException;
        return this;
    }
}