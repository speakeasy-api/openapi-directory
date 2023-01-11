package openapisdk.models.operations;



public class DeleteLifecyclePolicyResponse {
    public String contentType;
    public DeleteLifecyclePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteLifecyclePolicyResponse deleteLifecyclePolicyResponse;
    public DeleteLifecyclePolicyResponse withDeleteLifecyclePolicyResponse(openapisdk.models.shared.DeleteLifecyclePolicyResponse deleteLifecyclePolicyResponse) {
        this.deleteLifecyclePolicyResponse = deleteLifecyclePolicyResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteLifecyclePolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object lifecyclePolicyNotFoundException;
    public DeleteLifecyclePolicyResponse withLifecyclePolicyNotFoundException(Object lifecyclePolicyNotFoundException) {
        this.lifecyclePolicyNotFoundException = lifecyclePolicyNotFoundException;
        return this;
    }
    public Object repositoryNotFoundException;
    public DeleteLifecyclePolicyResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public DeleteLifecyclePolicyResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeleteLifecyclePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}