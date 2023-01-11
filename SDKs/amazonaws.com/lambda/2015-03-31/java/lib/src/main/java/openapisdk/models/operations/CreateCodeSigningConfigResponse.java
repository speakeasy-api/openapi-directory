package openapisdk.models.operations;



public class CreateCodeSigningConfigResponse {
    public String contentType;
    public CreateCodeSigningConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCodeSigningConfigResponse createCodeSigningConfigResponse;
    public CreateCodeSigningConfigResponse withCreateCodeSigningConfigResponse(openapisdk.models.shared.CreateCodeSigningConfigResponse createCodeSigningConfigResponse) {
        this.createCodeSigningConfigResponse = createCodeSigningConfigResponse;
        return this;
    }
    public Object invalidParameterValueException;
    public CreateCodeSigningConfigResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serviceException;
    public CreateCodeSigningConfigResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateCodeSigningConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}