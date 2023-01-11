package openapisdk.models.operations;



public class ListDiscoveredResourcesResponse {
    public Object accessDeniedException;
    public ListDiscoveredResourcesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListDiscoveredResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object homeRegionNotSetException;
    public ListDiscoveredResourcesResponse withHomeRegionNotSetException(Object homeRegionNotSetException) {
        this.homeRegionNotSetException = homeRegionNotSetException;
        return this;
    }
    public Object internalServerError;
    public ListDiscoveredResourcesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidInputException;
    public ListDiscoveredResourcesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public openapisdk.models.shared.ListDiscoveredResourcesResult listDiscoveredResourcesResult;
    public ListDiscoveredResourcesResponse withListDiscoveredResourcesResult(openapisdk.models.shared.ListDiscoveredResourcesResult listDiscoveredResourcesResult) {
        this.listDiscoveredResourcesResult = listDiscoveredResourcesResult;
        return this;
    }
    public Object resourceNotFoundException;
    public ListDiscoveredResourcesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListDiscoveredResourcesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListDiscoveredResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDiscoveredResourcesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}