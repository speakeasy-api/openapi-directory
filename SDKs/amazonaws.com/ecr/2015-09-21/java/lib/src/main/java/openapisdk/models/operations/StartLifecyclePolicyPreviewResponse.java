package openapisdk.models.operations;



public class StartLifecyclePolicyPreviewResponse {
    public String contentType;
    public StartLifecyclePolicyPreviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public StartLifecyclePolicyPreviewResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object lifecyclePolicyNotFoundException;
    public StartLifecyclePolicyPreviewResponse withLifecyclePolicyNotFoundException(Object lifecyclePolicyNotFoundException) {
        this.lifecyclePolicyNotFoundException = lifecyclePolicyNotFoundException;
        return this;
    }
    public Object lifecyclePolicyPreviewInProgressException;
    public StartLifecyclePolicyPreviewResponse withLifecyclePolicyPreviewInProgressException(Object lifecyclePolicyPreviewInProgressException) {
        this.lifecyclePolicyPreviewInProgressException = lifecyclePolicyPreviewInProgressException;
        return this;
    }
    public Object repositoryNotFoundException;
    public StartLifecyclePolicyPreviewResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public StartLifecyclePolicyPreviewResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public openapisdk.models.shared.StartLifecyclePolicyPreviewResponse startLifecyclePolicyPreviewResponse;
    public StartLifecyclePolicyPreviewResponse withStartLifecyclePolicyPreviewResponse(openapisdk.models.shared.StartLifecyclePolicyPreviewResponse startLifecyclePolicyPreviewResponse) {
        this.startLifecyclePolicyPreviewResponse = startLifecyclePolicyPreviewResponse;
        return this;
    }
    public Long statusCode;
    public StartLifecyclePolicyPreviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}