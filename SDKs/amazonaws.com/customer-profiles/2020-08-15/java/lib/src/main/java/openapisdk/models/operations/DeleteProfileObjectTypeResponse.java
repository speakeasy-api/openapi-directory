package openapisdk.models.operations;



public class DeleteProfileObjectTypeResponse {
    public Object accessDeniedException;
    public DeleteProfileObjectTypeResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public DeleteProfileObjectTypeResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteProfileObjectTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteProfileObjectTypeResponse deleteProfileObjectTypeResponse;
    public DeleteProfileObjectTypeResponse withDeleteProfileObjectTypeResponse(openapisdk.models.shared.DeleteProfileObjectTypeResponse deleteProfileObjectTypeResponse) {
        this.deleteProfileObjectTypeResponse = deleteProfileObjectTypeResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteProfileObjectTypeResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteProfileObjectTypeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteProfileObjectTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteProfileObjectTypeResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}