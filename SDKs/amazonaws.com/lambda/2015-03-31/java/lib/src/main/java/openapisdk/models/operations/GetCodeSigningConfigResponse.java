package openapisdk.models.operations;



public class GetCodeSigningConfigResponse {
    public String contentType;
    public GetCodeSigningConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCodeSigningConfigResponse getCodeSigningConfigResponse;
    public GetCodeSigningConfigResponse withGetCodeSigningConfigResponse(openapisdk.models.shared.GetCodeSigningConfigResponse getCodeSigningConfigResponse) {
        this.getCodeSigningConfigResponse = getCodeSigningConfigResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public GetCodeSigningConfigResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCodeSigningConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetCodeSigningConfigResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetCodeSigningConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}