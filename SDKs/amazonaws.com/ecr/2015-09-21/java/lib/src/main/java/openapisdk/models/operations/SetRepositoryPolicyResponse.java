package openapisdk.models.operations;



public class SetRepositoryPolicyResponse {
    public String contentType;
    public SetRepositoryPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public SetRepositoryPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object repositoryNotFoundException;
    public SetRepositoryPolicyResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public SetRepositoryPolicyResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public openapisdk.models.shared.SetRepositoryPolicyResponse setRepositoryPolicyResponse;
    public SetRepositoryPolicyResponse withSetRepositoryPolicyResponse(openapisdk.models.shared.SetRepositoryPolicyResponse setRepositoryPolicyResponse) {
        this.setRepositoryPolicyResponse = setRepositoryPolicyResponse;
        return this;
    }
    public Long statusCode;
    public SetRepositoryPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}