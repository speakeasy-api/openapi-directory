package openapisdk.models.operations;



public class ListFunctionsByCodeSigningConfigResponse {
    public String contentType;
    public ListFunctionsByCodeSigningConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListFunctionsByCodeSigningConfigResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListFunctionsByCodeSigningConfigResponse listFunctionsByCodeSigningConfigResponse;
    public ListFunctionsByCodeSigningConfigResponse withListFunctionsByCodeSigningConfigResponse(openapisdk.models.shared.ListFunctionsByCodeSigningConfigResponse listFunctionsByCodeSigningConfigResponse) {
        this.listFunctionsByCodeSigningConfigResponse = listFunctionsByCodeSigningConfigResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListFunctionsByCodeSigningConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public ListFunctionsByCodeSigningConfigResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListFunctionsByCodeSigningConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}