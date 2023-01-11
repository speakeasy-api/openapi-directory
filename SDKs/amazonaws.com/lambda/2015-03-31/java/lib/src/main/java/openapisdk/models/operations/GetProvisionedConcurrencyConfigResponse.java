package openapisdk.models.operations;



public class GetProvisionedConcurrencyConfigResponse {
    public String contentType;
    public GetProvisionedConcurrencyConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetProvisionedConcurrencyConfigResponse getProvisionedConcurrencyConfigResponse;
    public GetProvisionedConcurrencyConfigResponse withGetProvisionedConcurrencyConfigResponse(openapisdk.models.shared.GetProvisionedConcurrencyConfigResponse getProvisionedConcurrencyConfigResponse) {
        this.getProvisionedConcurrencyConfigResponse = getProvisionedConcurrencyConfigResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetProvisionedConcurrencyConfigResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object provisionedConcurrencyConfigNotFoundException;
    public GetProvisionedConcurrencyConfigResponse withProvisionedConcurrencyConfigNotFoundException(Object provisionedConcurrencyConfigNotFoundException) {
        this.provisionedConcurrencyConfigNotFoundException = provisionedConcurrencyConfigNotFoundException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetProvisionedConcurrencyConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetProvisionedConcurrencyConfigResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetProvisionedConcurrencyConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetProvisionedConcurrencyConfigResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}