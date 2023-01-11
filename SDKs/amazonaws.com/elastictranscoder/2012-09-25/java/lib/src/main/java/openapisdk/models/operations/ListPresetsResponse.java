package openapisdk.models.operations;



public class ListPresetsResponse {
    public Object accessDeniedException;
    public ListPresetsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListPresetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleVersionException;
    public ListPresetsResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public ListPresetsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ListPresetsResponse listPresetsResponse;
    public ListPresetsResponse withListPresetsResponse(openapisdk.models.shared.ListPresetsResponse listPresetsResponse) {
        this.listPresetsResponse = listPresetsResponse;
        return this;
    }
    public Long statusCode;
    public ListPresetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListPresetsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}