package openapisdk.models.operations;



public class GetLifecyclePoliciesResponse {
    public String contentType;
    public GetLifecyclePoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLifecyclePoliciesResponse getLifecyclePoliciesResponse;
    public GetLifecyclePoliciesResponse withGetLifecyclePoliciesResponse(openapisdk.models.shared.GetLifecyclePoliciesResponse getLifecyclePoliciesResponse) {
        this.getLifecyclePoliciesResponse = getLifecyclePoliciesResponse;
        return this;
    }
    public Object internalServerException;
    public GetLifecyclePoliciesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public GetLifecyclePoliciesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public GetLifecyclePoliciesResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetLifecyclePoliciesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetLifecyclePoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}