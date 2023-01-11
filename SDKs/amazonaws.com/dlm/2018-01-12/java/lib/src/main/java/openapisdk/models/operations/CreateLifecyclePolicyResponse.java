package openapisdk.models.operations;



public class CreateLifecyclePolicyResponse {
    public String contentType;
    public CreateLifecyclePolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLifecyclePolicyResponse createLifecyclePolicyResponse;
    public CreateLifecyclePolicyResponse withCreateLifecyclePolicyResponse(openapisdk.models.shared.CreateLifecyclePolicyResponse createLifecyclePolicyResponse) {
        this.createLifecyclePolicyResponse = createLifecyclePolicyResponse;
        return this;
    }
    public Object internalServerException;
    public CreateLifecyclePolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public CreateLifecyclePolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateLifecyclePolicyResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateLifecyclePolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}