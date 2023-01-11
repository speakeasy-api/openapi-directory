package openapisdk.models.operations;



public class GetMapStyleDescriptorResponse {
    public Object accessDeniedException;
    public GetMapStyleDescriptorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetMapStyleDescriptorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetMapStyleDescriptorResponse getMapStyleDescriptorResponse;
    public GetMapStyleDescriptorResponse withGetMapStyleDescriptorResponse(openapisdk.models.shared.GetMapStyleDescriptorResponse getMapStyleDescriptorResponse) {
        this.getMapStyleDescriptorResponse = getMapStyleDescriptorResponse;
        return this;
    }
    public Object internalServerException;
    public GetMapStyleDescriptorResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetMapStyleDescriptorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetMapStyleDescriptorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetMapStyleDescriptorResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetMapStyleDescriptorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}