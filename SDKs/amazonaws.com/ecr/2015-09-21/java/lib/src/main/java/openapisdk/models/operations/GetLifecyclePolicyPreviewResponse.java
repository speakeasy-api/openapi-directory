package openapisdk.models.operations;



public class GetLifecyclePolicyPreviewResponse {
    public String contentType;
    public GetLifecyclePolicyPreviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLifecyclePolicyPreviewResponse getLifecyclePolicyPreviewResponse;
    public GetLifecyclePolicyPreviewResponse withGetLifecyclePolicyPreviewResponse(openapisdk.models.shared.GetLifecyclePolicyPreviewResponse getLifecyclePolicyPreviewResponse) {
        this.getLifecyclePolicyPreviewResponse = getLifecyclePolicyPreviewResponse;
        return this;
    }
    public Object invalidParameterException;
    public GetLifecyclePolicyPreviewResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object lifecyclePolicyPreviewNotFoundException;
    public GetLifecyclePolicyPreviewResponse withLifecyclePolicyPreviewNotFoundException(Object lifecyclePolicyPreviewNotFoundException) {
        this.lifecyclePolicyPreviewNotFoundException = lifecyclePolicyPreviewNotFoundException;
        return this;
    }
    public Object repositoryNotFoundException;
    public GetLifecyclePolicyPreviewResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public GetLifecyclePolicyPreviewResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public GetLifecyclePolicyPreviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}