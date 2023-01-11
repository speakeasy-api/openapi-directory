package openapisdk.models.operations;



public class GetResourceCollectionResponse {
    public Object accessDeniedException;
    public GetResourceCollectionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetResourceCollectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetResourceCollectionResponse getResourceCollectionResponse;
    public GetResourceCollectionResponse withGetResourceCollectionResponse(openapisdk.models.shared.GetResourceCollectionResponse getResourceCollectionResponse) {
        this.getResourceCollectionResponse = getResourceCollectionResponse;
        return this;
    }
    public Object internalServerException;
    public GetResourceCollectionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetResourceCollectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetResourceCollectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetResourceCollectionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public GetResourceCollectionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}