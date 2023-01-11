package openapisdk.models.operations;



public class GetProfileObjectTypeResponse {
    public Object accessDeniedException;
    public GetProfileObjectTypeResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public GetProfileObjectTypeResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetProfileObjectTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetProfileObjectTypeResponse getProfileObjectTypeResponse;
    public GetProfileObjectTypeResponse withGetProfileObjectTypeResponse(openapisdk.models.shared.GetProfileObjectTypeResponse getProfileObjectTypeResponse) {
        this.getProfileObjectTypeResponse = getProfileObjectTypeResponse;
        return this;
    }
    public Object internalServerException;
    public GetProfileObjectTypeResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetProfileObjectTypeResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetProfileObjectTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetProfileObjectTypeResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}