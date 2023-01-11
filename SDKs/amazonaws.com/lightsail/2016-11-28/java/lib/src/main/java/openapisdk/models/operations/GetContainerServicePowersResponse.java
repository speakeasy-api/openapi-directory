package openapisdk.models.operations;



public class GetContainerServicePowersResponse {
    public Object accessDeniedException;
    public GetContainerServicePowersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetContainerServicePowersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetContainerServicePowersResult getContainerServicePowersResult;
    public GetContainerServicePowersResponse withGetContainerServicePowersResult(openapisdk.models.shared.GetContainerServicePowersResult getContainerServicePowersResult) {
        this.getContainerServicePowersResult = getContainerServicePowersResult;
        return this;
    }
    public Object invalidInputException;
    public GetContainerServicePowersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetContainerServicePowersResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public GetContainerServicePowersResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetContainerServicePowersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetContainerServicePowersResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}