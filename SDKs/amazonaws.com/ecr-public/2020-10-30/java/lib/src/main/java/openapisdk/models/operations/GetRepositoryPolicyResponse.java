package openapisdk.models.operations;



public class GetRepositoryPolicyResponse {
    public String contentType;
    public GetRepositoryPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRepositoryPolicyResponse getRepositoryPolicyResponse;
    public GetRepositoryPolicyResponse withGetRepositoryPolicyResponse(openapisdk.models.shared.GetRepositoryPolicyResponse getRepositoryPolicyResponse) {
        this.getRepositoryPolicyResponse = getRepositoryPolicyResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetRepositoryPolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object repositoryNotFoundException;
    public GetRepositoryPolicyResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object repositoryPolicyNotFoundException;
    public GetRepositoryPolicyResponse withRepositoryPolicyNotFoundException(Object repositoryPolicyNotFoundException) {
        this.repositoryPolicyNotFoundException = repositoryPolicyNotFoundException;
        return this;
    }
    public Object serverException;
    public GetRepositoryPolicyResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public GetRepositoryPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}