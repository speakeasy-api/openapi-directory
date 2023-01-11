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
    public Object internalServerException;
    public GetPolicyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
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
    public Object throttlingException;
    public GetPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}