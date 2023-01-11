package openapisdk.models.operations;



public class GetContainerServiceDeploymentsResponse {
    public Object accessDeniedException;
    public GetContainerServiceDeploymentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetContainerServiceDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetContainerServiceDeploymentsResult getContainerServiceDeploymentsResult;
    public GetContainerServiceDeploymentsResponse withGetContainerServiceDeploymentsResult(openapisdk.models.shared.GetContainerServiceDeploymentsResult getContainerServiceDeploymentsResult) {
        this.getContainerServiceDeploymentsResult = getContainerServiceDeploymentsResult;
        return this;
    }
    public Object invalidInputException;
    public GetContainerServiceDeploymentsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetContainerServiceDeploymentsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public GetContainerServiceDeploymentsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetContainerServiceDeploymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetContainerServiceDeploymentsResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}