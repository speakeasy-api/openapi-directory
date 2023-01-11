package openapisdk.models.operations;



public class UpdateCodeSigningConfigResponse {
    public String contentType;
    public UpdateCodeSigningConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public UpdateCodeSigningConfigResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateCodeSigningConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public UpdateCodeSigningConfigResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateCodeSigningConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateCodeSigningConfigResponse updateCodeSigningConfigResponse;
    public UpdateCodeSigningConfigResponse withUpdateCodeSigningConfigResponse(openapisdk.models.shared.UpdateCodeSigningConfigResponse updateCodeSigningConfigResponse) {
        this.updateCodeSigningConfigResponse = updateCodeSigningConfigResponse;
        return this;
    }
}