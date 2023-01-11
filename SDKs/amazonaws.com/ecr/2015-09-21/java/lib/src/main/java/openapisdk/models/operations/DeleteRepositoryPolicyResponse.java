package openapisdk.models.operations;



public class DeleteRepositoryPolicyResponse {
    public String contentType;
    public DeleteRepositoryPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRepositoryPolicyResponse deleteRepositoryPolicyResponse;
    public DeleteRepositoryPolicyResponse withDeleteRepositoryPolicyResponse(openapisdk.models.shared.DeleteRepositoryPolicyResponse deleteRepositoryPolicyResponse) {
        this.deleteRepositoryPolicyResponse = deleteRepositoryPolicyResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteRepositoryPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object repositoryNotFoundException;
    public DeleteRepositoryPolicyResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object repositoryPolicyNotFoundException;
    public DeleteRepositoryPolicyResponse withRepositoryPolicyNotFoundException(Object repositoryPolicyNotFoundException) {
        this.repositoryPolicyNotFoundException = repositoryPolicyNotFoundException;
        return this;
    }
    public Object serverException;
    public DeleteRepositoryPolicyResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeleteRepositoryPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}