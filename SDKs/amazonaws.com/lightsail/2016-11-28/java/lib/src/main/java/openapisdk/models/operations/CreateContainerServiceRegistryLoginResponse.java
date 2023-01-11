package openapisdk.models.operations;



public class CreateContainerServiceRegistryLoginResponse {
    public Object accessDeniedException;
    public CreateContainerServiceRegistryLoginResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateContainerServiceRegistryLoginResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateContainerServiceRegistryLoginResult createContainerServiceRegistryLoginResult;
    public CreateContainerServiceRegistryLoginResponse withCreateContainerServiceRegistryLoginResult(openapisdk.models.shared.CreateContainerServiceRegistryLoginResult createContainerServiceRegistryLoginResult) {
        this.createContainerServiceRegistryLoginResult = createContainerServiceRegistryLoginResult;
        return this;
    }
    public Object invalidInputException;
    public CreateContainerServiceRegistryLoginResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public CreateContainerServiceRegistryLoginResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceException;
    public CreateContainerServiceRegistryLoginResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateContainerServiceRegistryLoginResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public CreateContainerServiceRegistryLoginResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}