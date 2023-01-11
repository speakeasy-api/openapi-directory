package openapisdk.models.operations;



public class ListProvisionedConcurrencyConfigsResponse {
    public String contentType;
    public ListProvisionedConcurrencyConfigsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListProvisionedConcurrencyConfigsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListProvisionedConcurrencyConfigsResponse listProvisionedConcurrencyConfigsResponse;
    public ListProvisionedConcurrencyConfigsResponse withListProvisionedConcurrencyConfigsResponse(openapisdk.models.shared.ListProvisionedConcurrencyConfigsResponse listProvisionedConcurrencyConfigsResponse) {
        this.listProvisionedConcurrencyConfigsResponse = listProvisionedConcurrencyConfigsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProvisionedConcurrencyConfigsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public ListProvisionedConcurrencyConfigsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListProvisionedConcurrencyConfigsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListProvisionedConcurrencyConfigsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}