package openapisdk.models.operations;



public class PutLifecyclePolicyResponse {
    public String contentType;
    public PutLifecyclePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public PutLifecyclePolicyResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.PutLifecyclePolicyResponse putLifecyclePolicyResponse;
    public PutLifecyclePolicyResponse withPutLifecyclePolicyResponse(openapisdk.models.shared.PutLifecyclePolicyResponse putLifecyclePolicyResponse) {
        this.putLifecyclePolicyResponse = putLifecyclePolicyResponse;
        return this;
    }
    public Object repositoryNotFoundException;
    public PutLifecyclePolicyResponse withRepositoryNotFoundException(Object repositoryNotFoundException) {
        this.repositoryNotFoundException = repositoryNotFoundException;
        return this;
    }
    public Object serverException;
    public PutLifecyclePolicyResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public PutLifecyclePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}