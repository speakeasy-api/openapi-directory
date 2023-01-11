package openapisdk.models.operations;



public class GetVaultNotificationsResponse {
    public String contentType;
    public GetVaultNotificationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetVaultNotificationsOutput getVaultNotificationsOutput;
    public GetVaultNotificationsResponse withGetVaultNotificationsOutput(openapisdk.models.shared.GetVaultNotificationsOutput getVaultNotificationsOutput) {
        this.getVaultNotificationsOutput = getVaultNotificationsOutput;
        return this;
    }
    public Object invalidParameterValueException;
    public GetVaultNotificationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public GetVaultNotificationsResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetVaultNotificationsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetVaultNotificationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetVaultNotificationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}