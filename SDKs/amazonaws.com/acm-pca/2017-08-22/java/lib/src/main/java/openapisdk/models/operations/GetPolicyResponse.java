package openapisdk.models.operations;



public class GetPolicyResponse {
    public String contentType;
    public GetPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetPolicyResponse getPolicyResponse;
    public GetPolicyResponse withGetPolicyResponse(openapisdk.models.shared.GetPolicyResponse getPolicyResponse) {
        this.getPolicyResponse = getPolicyResponse;
        return this;
    }
    public Object invalidArnException;
    public GetPolicyResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object invalidStateException;
    public GetPolicyResponse withInvalidStateException(Object invalidStateException) {
        this.invalidStateException = invalidStateException;
        return this;
    }
    public Object requestFailedException;
    public GetPolicyResponse withRequestFailedException(Object requestFailedException) {
        this.requestFailedException = requestFailedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}