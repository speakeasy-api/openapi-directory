package openapisdk.models.operations;



public class DeleteRepositoryResponse {
    public String contentType;
    public DeleteRepositoryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRepositoryResponse deleteRepositoryResponse;
    public DeleteRepositoryResponse withDeleteRepositoryResponse(openapisdk.models.shared.DeleteRepositoryResponse deleteRepositoryResponse) {
        this.deleteRepositoryResponse = deleteRepositoryResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteRepositoryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object kmsException;
    public DeleteRepositoryResponse withKmsException(Object kmsException) {
        this.kmsException = kmsException;
        return this;
    }
    public Object repositoryNotEmptyException;
    public DeleteRepositoryResponse withRepositoryNotEmptyException(Object repositoryNotEmptyException) {
        this.repositoryNotEmptyException = repositoryNotEmptyException;
        return this;
    }
    public Object repositoryNotFoundException;
    public DeleteRepositoryResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public DeleteRepositoryResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeleteRepositoryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}