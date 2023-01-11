package openapisdk.models.operations;



public class DeleteProfileKeyResponse {
    public Object accessDeniedException;
    public DeleteProfileKeyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public DeleteProfileKeyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteProfileKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteProfileKeyResponse deleteProfileKeyResponse;
    public DeleteProfileKeyResponse withDeleteProfileKeyResponse(openapisdk.models.shared.DeleteProfileKeyResponse deleteProfileKeyResponse) {
        this.deleteProfileKeyResponse = deleteProfileKeyResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteProfileKeyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteProfileKeyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteProfileKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteProfileKeyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}