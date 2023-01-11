package openapisdk.models.operations;



public class SetTagsForResourceResponse {
    public Object accessDeniedException;
    public SetTagsForResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public SetTagsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public SetTagsForResourceResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public SetTagsForResourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object noSuchEntityException;
    public SetTagsForResourceResponse withNoSuchEntityException(Object noSuchEntityException) {
        this.noSuchEntityException = noSuchEntityException;
        return this;
    }
    public Object serviceTemporarilyUnavailableException;
    public SetTagsForResourceResponse withServiceTemporarilyUnavailableException(Object serviceTemporarilyUnavailableException) {
        this.serviceTemporarilyUnavailableException = serviceTemporarilyUnavailableException;
        return this;
    }
    public Long statusCode;
    public SetTagsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}