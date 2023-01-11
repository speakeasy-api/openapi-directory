package openapisdk.models.operations;



public class CreateComputerResponse {
    public Object authenticationFailedException;
    public CreateComputerResponse withAuthenticationFailedException(Object authenticationFailedException) {
        this.authenticationFailedException = authenticationFailedException;
        return this;
    }
    public Object clientException;
    public CreateComputerResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateComputerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateComputerResult createComputerResult;
    public CreateComputerResponse withCreateComputerResult(openapisdk.models.shared.CreateComputerResult createComputerResult) {
        this.createComputerResult = createComputerResult;
        return this;
    }
    public Object directoryUnavailableException;
    public CreateComputerResponse withDirectoryUnavailableException(Object directoryUnavailableException) {
        this.directoryUnavailableException = directoryUnavailableException;
        return this;
    }
    public Object entityAlreadyExistsException;
    public CreateComputerResponse withEntityAlreadyExistsException(Object entityAlreadyExistsException) {
        this.entityAlreadyExistsException = entityAlreadyExistsException;
        return this;
    }
    public Object entityDoesNotExistException;
    public CreateComputerResponse withEntityDoesNotExistException(Object entityDoesNotExistException) {
        this.entityDoesNotExistException = entityDoesNotExistException;
        return this;
    }
    public Object invalidParameterException;
    public CreateComputerResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serviceException;
    public CreateComputerResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public CreateComputerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public CreateComputerResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}