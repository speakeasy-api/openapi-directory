package openapisdk.models.operations;



public class DeleteControlResponse {
    public Object accessDeniedException;
    public DeleteControlResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteControlResponse;
    public DeleteControlResponse withDeleteControlResponse(java.util.Map<String, Object> deleteControlResponse) {
        this.deleteControlResponse = deleteControlResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteControlResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteControlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteControlResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}