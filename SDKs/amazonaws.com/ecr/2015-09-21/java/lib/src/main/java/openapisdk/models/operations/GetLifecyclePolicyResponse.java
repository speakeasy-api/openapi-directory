package openapisdk.models.operations;



public class GetLifecyclePolicyResponse {
    public String contentType;
    public GetLifecyclePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLifecyclePolicyResponse getLifecyclePolicyResponse;
    public GetLifecyclePolicyResponse withGetLifecyclePolicyResponse(openapisdk.models.shared.GetLifecyclePolicyResponse getLifecyclePolicyResponse) {
        this.getLifecyclePolicyResponse = getLifecyclePolicyResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetLifecyclePolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object lifecyclePolicyNotFoundException;
    public GetLifecyclePolicyResponse withLifecyclePolicyNotFoundException(Object lifecyclePolicyNotFoundException) {
        this.lifecyclePolicyNotFoundException = lifecyclePolicyNotFoundException;
        return this;
    }
    public Object repositoryNotFoundException;
    public GetLifecyclePolicyResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public GetLifecyclePolicyResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public GetLifecyclePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}