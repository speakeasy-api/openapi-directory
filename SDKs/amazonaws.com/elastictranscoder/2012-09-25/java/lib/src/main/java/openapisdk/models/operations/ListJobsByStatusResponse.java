package openapisdk.models.operations;



public class ListJobsByStatusResponse {
    public Object accessDeniedException;
    public ListJobsByStatusResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListJobsByStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incompatibleVersionException;
    public ListJobsByStatusResponse withIncompatibleVersionException(Object incompatibleVersionException) {
        this.incompatibleVersionException = incompatibleVersionException;
        return this;
    }
    public Object internalServiceException;
    public ListJobsByStatusResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.ListJobsByStatusResponse listJobsByStatusResponse;
    public ListJobsByStatusResponse withListJobsByStatusResponse(openapisdk.models.shared.ListJobsByStatusResponse listJobsByStatusResponse) {
        this.listJobsByStatusResponse = listJobsByStatusResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListJobsByStatusResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListJobsByStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListJobsByStatusResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}