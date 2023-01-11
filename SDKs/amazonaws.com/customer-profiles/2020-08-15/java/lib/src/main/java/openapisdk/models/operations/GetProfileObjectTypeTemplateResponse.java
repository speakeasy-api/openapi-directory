package openapisdk.models.operations;



public class GetProfileObjectTypeTemplateResponse {
    public Object accessDeniedException;
    public GetProfileObjectTypeTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object badRequestException;
    public GetProfileObjectTypeTemplateResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetProfileObjectTypeTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetProfileObjectTypeTemplateResponse getProfileObjectTypeTemplateResponse;
    public GetProfileObjectTypeTemplateResponse withGetProfileObjectTypeTemplateResponse(openapisdk.models.shared.GetProfileObjectTypeTemplateResponse getProfileObjectTypeTemplateResponse) {
        this.getProfileObjectTypeTemplateResponse = getProfileObjectTypeTemplateResponse;
        return this;
    }
    public Object internalServerException;
    public GetProfileObjectTypeTemplateResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetProfileObjectTypeTemplateResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetProfileObjectTypeTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetProfileObjectTypeTemplateResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}