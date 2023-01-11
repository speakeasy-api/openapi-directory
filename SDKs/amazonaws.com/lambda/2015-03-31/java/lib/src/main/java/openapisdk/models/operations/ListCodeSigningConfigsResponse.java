package openapisdk.models.operations;



public class ListCodeSigningConfigsResponse {
    public String contentType;
    public ListCodeSigningConfigsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListCodeSigningConfigsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListCodeSigningConfigsResponse listCodeSigningConfigsResponse;
    public ListCodeSigningConfigsResponse withListCodeSigningConfigsResponse(openapisdk.models.shared.ListCodeSigningConfigsResponse listCodeSigningConfigsResponse) {
        this.listCodeSigningConfigsResponse = listCodeSigningConfigsResponse;
        return this;
    }
    public Object serviceException;
    public ListCodeSigningConfigsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListCodeSigningConfigsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}