package openapisdk.models.operations;



public class DeleteProfileObjectResponse {
    public Object accessDeniedException;
    public DeleteProfileObjectResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public DeleteProfileObjectResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteProfileObjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteProfileObjectResponse deleteProfileObjectResponse;
    public DeleteProfileObjectResponse withDeleteProfileObjectResponse(openapisdk.models.shared.DeleteProfileObjectResponse deleteProfileObjectResponse) {
        this.deleteProfileObjectResponse = deleteProfileObjectResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteProfileObjectResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteProfileObjectResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteProfileObjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteProfileObjectResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}