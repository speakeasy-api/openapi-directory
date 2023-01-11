package openapisdk.models.operations;



public class DeleteAlertResponse {
    public Object accessDeniedException;
    public DeleteAlertResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteAlertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAlertResponse;
    public DeleteAlertResponse withDeleteAlertResponse(java.util.Map<String, Object> deleteAlertResponse) {
        this.deleteAlertResponse = deleteAlertResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteAlertResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAlertResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAlertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteAlertResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public DeleteAlertResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}