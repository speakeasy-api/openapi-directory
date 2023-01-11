package openapisdk.models.operations;



public class AddProfileKeyResponse {
    public Object accessDeniedException;
    public AddProfileKeyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AddProfileKeyResponse addProfileKeyResponse;
    public AddProfileKeyResponse withAddProfileKeyResponse(openapisdk.models.shared.AddProfileKeyResponse addProfileKeyResponse) {
        this.addProfileKeyResponse = addProfileKeyResponse;
        return this;
    }
    public Object badRequestException;
    public AddProfileKeyResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public AddProfileKeyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public AddProfileKeyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public AddProfileKeyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AddProfileKeyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AddProfileKeyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}