package openapisdk.models.operations;



public class UpdateApplicationResponse {
    public Object conflictException;
    public UpdateApplicationResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public UpdateApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateApplicationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateApplicationResponse updateApplicationResponse;
    public UpdateApplicationResponse withUpdateApplicationResponse(openapisdk.models.shared.UpdateApplicationResponse updateApplicationResponse) {
        this.updateApplicationResponse = updateApplicationResponse;
        return this;
    }
}