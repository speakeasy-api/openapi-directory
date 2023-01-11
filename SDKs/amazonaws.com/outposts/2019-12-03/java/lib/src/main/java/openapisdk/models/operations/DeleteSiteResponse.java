package openapisdk.models.operations;



public class DeleteSiteResponse {
    public Object accessDeniedException;
    public DeleteSiteResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteSiteResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteSiteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSiteOutput;
    public DeleteSiteResponse withDeleteSiteOutput(java.util.Map<String, Object> deleteSiteOutput) {
        this.deleteSiteOutput = deleteSiteOutput;
        return this;
    }
    public Object internalServerException;
    public DeleteSiteResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object notFoundException;
    public DeleteSiteResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteSiteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteSiteResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}