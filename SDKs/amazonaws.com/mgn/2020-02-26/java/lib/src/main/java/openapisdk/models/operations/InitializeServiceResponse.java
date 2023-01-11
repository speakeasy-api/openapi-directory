package openapisdk.models.operations;



public class InitializeServiceResponse {
    public Object accessDeniedException;
    public InitializeServiceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public InitializeServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> initializeServiceResponse;
    public InitializeServiceResponse withInitializeServiceResponse(java.util.Map<String, Object> initializeServiceResponse) {
        this.initializeServiceResponse = initializeServiceResponse;
        return this;
    }
    public Long statusCode;
    public InitializeServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public InitializeServiceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}