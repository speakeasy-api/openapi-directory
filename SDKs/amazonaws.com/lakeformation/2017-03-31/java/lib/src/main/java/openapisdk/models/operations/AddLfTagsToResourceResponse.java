package openapisdk.models.operations;



public class AddLfTagsToResourceResponse {
    public Object accessDeniedException;
    public AddLfTagsToResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.AddLfTagsToResourceResponse addLFTagsToResourceResponse;
    public AddLfTagsToResourceResponse withAddLfTagsToResourceResponse(openapisdk.models.shared.AddLfTagsToResourceResponse addLFTagsToResourceResponse) {
        this.addLFTagsToResourceResponse = addLFTagsToResourceResponse;
        return this;
    }
    public Object concurrentModificationException;
    public AddLfTagsToResourceResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public AddLfTagsToResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public AddLfTagsToResourceResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public AddLfTagsToResourceResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public AddLfTagsToResourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public AddLfTagsToResourceResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public AddLfTagsToResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}