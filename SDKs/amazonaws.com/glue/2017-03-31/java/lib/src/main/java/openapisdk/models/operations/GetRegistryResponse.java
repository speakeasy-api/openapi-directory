package openapisdk.models.operations;



public class GetRegistryResponse {
    public Object accessDeniedException;
    public GetRegistryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetRegistryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetRegistryResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetRegistryResponse getRegistryResponse;
    public GetRegistryResponse withGetRegistryResponse(openapisdk.models.shared.GetRegistryResponse getRegistryResponse) {
        this.getRegistryResponse = getRegistryResponse;
        return this;
    }
    public Object internalServiceException;
    public GetRegistryResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetRegistryResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public GetRegistryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}