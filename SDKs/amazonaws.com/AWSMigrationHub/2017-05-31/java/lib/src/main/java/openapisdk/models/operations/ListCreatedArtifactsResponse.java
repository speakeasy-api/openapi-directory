package openapisdk.models.operations;



public class ListCreatedArtifactsResponse {
    public Object accessDeniedException;
    public ListCreatedArtifactsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListCreatedArtifactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public ListCreatedArtifactsResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public ListCreatedArtifactsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public ListCreatedArtifactsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListCreatedArtifactsResult listCreatedArtifactsResult;
    public ListCreatedArtifactsResponse withListCreatedArtifactsResult(openapisdk.models.shared.ListCreatedArtifactsResult listCreatedArtifactsResult) {
        this.listCreatedArtifactsResult = listCreatedArtifactsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public ListCreatedArtifactsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListCreatedArtifactsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListCreatedArtifactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListCreatedArtifactsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}