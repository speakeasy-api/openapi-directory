package openapisdk.models.operations;



public class UpdateRepositoryNameResponse {
    public String contentType;
    public UpdateRepositoryNameResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidRepositoryNameException;
    public UpdateRepositoryNameResponse withInvalidRepositoryNameException(Object invalidRepositoryNameException) {
        this.invalidRepositoryNameException = invalidRepositoryNameException;
        return this;
    }
    public Object repositoryDoesNotExistException;
    public UpdateRepositoryNameResponse withRepositoryDoesNotExistException(Object repositoryDoesNotExistException) {
        this.repositoryDoesNotExistException = repositoryDoesNotExistException;
        return this;
    }
    public Object repositoryNameExistsException;
    public UpdateRepositoryNameResponse withRepositoryNameExistsException(Object repositoryNameExistsException) {
        this.repositoryNameExistsException = repositoryNameExistsException;
        return this;
    }
    public Object repositoryNameRequiredException;
    public UpdateRepositoryNameResponse withRepositoryNameRequiredException(Object repositoryNameRequiredException) {
        this.repositoryNameRequiredException = repositoryNameRequiredException;
        return this;
    }
    public Long statusCode;
    public UpdateRepositoryNameResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}